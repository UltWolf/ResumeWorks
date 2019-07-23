using Microsoft.AspNetCore.Mvc;

namespace ResumeWorks.Controllers
{
    public class VacancyController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}