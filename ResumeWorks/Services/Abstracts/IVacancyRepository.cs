using System.Linq;
using System.Threading.Tasks;
using ResumeWorks.Models;

namespace ResumeWorks.Services.Abstracts
{
    public interface IVacancyRepository
    {
        IQueryable<Vacancy> GetCount(int count, int skipCount );
        Task CreateAsync(Vacancy item);
        int GetCount();
        void Update(Vacancy item);
        void Delete(Vacancy item);
        Task<Vacancy> GetAsync(int id);
    }
}