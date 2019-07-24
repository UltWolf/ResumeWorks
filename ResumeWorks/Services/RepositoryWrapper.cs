using System.Threading.Tasks;
using ResumeWorks.Data;
using ResumeWorks.Services.Abstracts;

namespace ResumeWorks.Services
{
    public class RepositoryWrapper:IRepositoryWrapper
    {
        private ApplicationDbContext _repoContext;
        private IVacancyRepository _vacancy; 
 
        public IVacancyRepository VacancyRepository {
            get {
                if(_vacancy == null)
                {
                    _vacancy= new VacancyRepository(_repoContext);
                }
 
                return _vacancy;
            }
        } 
        public RepositoryWrapper(ApplicationDbContext repositoryContext)
        {
            _repoContext = repositoryContext;
        }
 
        public async Task SaveAsync()
        {
            await this._repoContext.SaveChangesAsync();
        }

        public void Save()
        {
          this._repoContext.SaveChanges();
        }
    }
}