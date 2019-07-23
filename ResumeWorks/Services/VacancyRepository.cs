using System.Threading.Tasks;
using ResumeWorks.Data;
using ResumeWorks.Models;
using ResumeWorks.Services.Abstracts;

namespace ResumeWorks.Services
{
    public class VacancyRepository:IRepository<Vacancy>
    {
        private readonly ApplicationDbContext _context;

        public VacancyRepository( ApplicationDbContext context)
        {
            _context = context;
        }
        
        public async void CreateAsync(Vacancy item)
        {
            await this._context.Vacancies.AddAsync(item);
            await this._context.SaveChangesAsync();
        }

        public async void UpdateAsync(Vacancy item)
        {
             this._context.Update(item);
             await this._context.SaveChangesAsync();
        }

        public async void DeleteAsync(Vacancy item)
        {
            this._context.Vacancies.Remove(item);
            await this._context.SaveChangesAsync();
        }

        public async Task<Vacancy> GetAsync(int id)
        {
            return await this._context.Vacancies.FindAsync(id);
        }
    }
}