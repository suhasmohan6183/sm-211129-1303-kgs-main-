using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PetsAlone.Angular.Models
{
    public class ResponseModel
    {
        private ResponseModel() { }
        public int Status { get; set; }

        public string Message { get; set; }

        public object Data { get; set; }

        public static ResponseModel CreateBadResponse(string Message="", object Data=null)
        {
            var response = new ResponseModel()
            {
                Status = 400,
                Message = Message,
                Data = Data
            };

            return response;
        }

        public static ResponseModel CreateOkResponse(string Message = "", object Data = null)
        {
            var response = new ResponseModel()
            {
                Status = 200,
                Message = Message,
                Data = Data
            };

            return response;
        }

    }
}
