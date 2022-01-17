using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace PetsAlone.Angular.Utility
{
    public class GlobalExceptionHandler : IExceptionFilter
    {
        public void OnException(ExceptionContext context)
        {
            var responseobj = JsonConvert.SerializeObject( new
            {
                Status = Convert.ToInt32(HttpStatusCode.InternalServerError),
                Message = "Something went wrong. Unable to process your request.",
                DeveloperException = context.Exception
            });

            HttpResponse response = context.HttpContext.Response;
            response.StatusCode = Convert.ToInt32(HttpStatusCode.InternalServerError);
            response.ContentType = "application/json";
            response.ContentLength = responseobj.Length;
            response.WriteAsync(responseobj);
        }
    }
}
