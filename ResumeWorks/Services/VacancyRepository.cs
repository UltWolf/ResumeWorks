using System;
using System.Linq;
using System.Threading.Tasks;
using ResumeWorks.Data;
using ResumeWorks.Models;
using ResumeWorks.Services.Abstracts;

namespace ResumeWorks.Services
{
    public class VacancyRepository:IVacancyRepository
    {
        private readonly ApplicationDbContext _context;

        public VacancyRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public IQueryable<Vacancy> GetCount(int count, int skipCount)
        { 
            return this._context.Vacancies.Skip(skipCount).Take(count);
        }

        public async Task CreateAsync(Vacancy item)
        { 
            await this._context.Vacancies.AddAsync(item);
           
        }

        public int GetCount()
        {
            
            try
            {
               return this._context.Vacancies.Count();
            }
            catch (Exception ex)
            {
                return 0;
            }
 
        }

        public void Update(Vacancy item)
        {
             this._context.Update(item);
            
        }

        public  void Delete(Vacancy item)
        {
            this._context.Vacancies.Remove(item); 
        }

        public async Task<Vacancy> GetAsync(int id)
        {
            return await this._context.Vacancies.FindAsync(id);
        }
    }
}