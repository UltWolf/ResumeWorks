using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using ResumeWorks.Data;

namespace ResumeWorks.Services.DbInitialize
{
    public static class WebHostBuilder
    {
        public static IWebHost Seed(this IWebHost webhost)
        {
            using (var scope = webhost.Services.GetService<IServiceScopeFactory>().CreateScope())
            {
                    
                using( var dbContext = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>())
                {
                    CreateUserDB.Initialize(dbContext);
                } 
             
            }

            return webhost;
        }
    }
}