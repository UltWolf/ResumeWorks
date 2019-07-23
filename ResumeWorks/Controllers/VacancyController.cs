using Microsoft.AspNetCore.Mvc;
using ResumeWorks.Data;

namespace ResumeWorks.Controllers
{
    public class VacancyController : Controller
    {
        private readonly ApplicationDbContext _context;

        public VacancyController(ApplicationDbContext context)
        {
            _context = context;
        } 
        
        public IActionResult Index()
        {
            return View();
        }
    }
}