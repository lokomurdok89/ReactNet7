
using Application;
using Application.Core;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Extension
{
    public static class ApplicationServiceExtension
    {
         public static IServiceCollection AddApplicationServices(this IServiceCollection services,
                                                                IConfiguration config)
        {           
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            
            services.AddHttpContextAccessor();
            services.AddEndpointsApiExplorer();
            services.AddSwaggerGen();
            services.AddDbContext<DataContext>(opt => {
                opt.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            // permision cors for aplication 
            services.AddCors(opt=>{
                opt.AddPolicy("CorsPolicy",policy=>{
                    policy.AllowAnyMethod().AllowAnyHeader().WithOrigins("http://localhost:3000");
                });

            });

            services.AddMediatR(typeof(List.Handler));  
            services.AddOptions();
            
           
            return services;
        }
        
    }
}