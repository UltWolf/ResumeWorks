using System;
using Microsoft.Extensions.DependencyInjection;
using ResumeWorks.Data;

namespace ResumeWorks.Services.DbInitialize
{
    public class CreateUserDB
    {
        public static  void Initialize(ApplicationDbContext dbContext)
        {  
                dbContext.Database.EnsureCreated();  
        } 
    }
}