using System.Threading.Tasks;

namespace ResumeWorks.Services.Abstracts
{
    public interface IRepositoryWrapper
    { 
            IVacancyRepository VacancyRepository { get; } 
            Task SaveAsync();
            void Save();

    }
}