using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.VisualBasic.ApplicationServices;
using Newtonsoft.Json;
using ResumeWorks.Models;
using ResumeWorks.Services;
using ResumeWorks.Services.Abstracts;


namespace ResumeWorks.Controllers
{
    [ValidationModel]
    [AllowAnonymous]
    [ApiController]
    [Route("api/vacancy")]
    public class VacancyController
    {
        private readonly IRepositoryWrapper _repository;
        private readonly ILogger<VacancyController> _logger;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IHttpContextAccessor _httpContext;

        public VacancyController(UserManager<ApplicationUser> userManager, IRepositoryWrapper repository,
            ILogger<VacancyController> logger, IHttpContextAccessor httpContext)
        {
            _httpContext = httpContext;
            _repository = repository;
            _logger = logger;
            _userManager = userManager;
        }

        [HttpGet("{pageNumber}")]
        public async Task<IActionResult> GetCount(int pageNumber )
        {
            int count = 5;
            var vacancies = _repository.VacancyRepository.GetCount(count, pageNumber);
            return new ObjectResult(vacancies);
        }

        [HttpGet("pageCount")]
        public  int  getPages()
        {
            int countOfItem = 5;
            try
            {
                int countOfPages = this._repository.VacancyRepository.GetCount() / countOfItem;
                return countOfPages;
            }
            catch (Exception ex)
            {
                return 0;
            }
        } 
        [HttpGet("Instance/{Id}")]
        public async Task<IActionResult> Get(int? id)
        { 
            if (id == null)
            { 
                return new BadRequestObjectResult("Id is nullable.");
            }
             
            var vacancy = await this._repository.VacancyRepository.GetAsync((int) id);
            return new ObjectResult(vacancy);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Add([FromBody] Vacancy vacancy)
        {
            this._logger.LogInformation("User add Vacancy" + JsonConvert.SerializeObject(vacancy));
            if (vacancy == null)
            {
                return new BadRequestObjectResult("Vacancy is nullable.");
            }
            var userId = this._httpContext.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var user = await _userManager.FindByIdAsync(userId);
            vacancy.AuthorEmail = user.Email;
            try
            {
                await _repository.VacancyRepository.CreateAsync(vacancy);
                await _repository.SaveAsync();
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult("Cannot add to database");
            }

            return new OkObjectResult(vacancy.Id);
        }

        [Authorize]
        [HttpPost("Delete")]
        public async Task<IActionResult> DeleteByObject([FromBody] Vacancy vacancy)
        {
            
            if (vacancy == null)
            {
                return new BadRequestObjectResult("vacancy isn`t null");
            }
            var userId = this._httpContext.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var user = await _userManager.FindByIdAsync(userId);
            if (user.Email != vacancy.AuthorEmail)
            {
                return new BadRequestObjectResult("Authorizated user and Author have different email. ");
            }

            this._repository.VacancyRepository.Delete(vacancy);
            await this._repository.SaveAsync();

            return new OkResult();
        }

        [HttpPut]
        [Authorize]
        public async Task<IActionResult> Update([FromBody] Vacancy vacancy)
        {
            if (vacancy == null)
            {
                return new BadRequestObjectResult("vacancy isn`t null");
            }
            var userId = this._httpContext.HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;
            var user = await _userManager.FindByIdAsync(userId);
            if (user.Email != vacancy.AuthorEmail)
            {
                return new BadRequestObjectResult("Authorizated user and Author have different email. ");
            }

            try
            {
                this._repository.VacancyRepository.Update(vacancy);
                await this._repository.SaveAsync();
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult("Cannot update database");
            }

            return new OkResult();
        }
    }
}