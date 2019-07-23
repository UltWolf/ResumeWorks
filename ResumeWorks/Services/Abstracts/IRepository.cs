using System.Threading.Tasks;

namespace ResumeWorks.Services.Abstracts
{
    public interface IRepository<T>
    { 
        void CreateAsync(T item);
        void UpdateAsync(T item);
        void DeleteAsync(T item);
        Task<T> GetAsync(int id);
    }
}