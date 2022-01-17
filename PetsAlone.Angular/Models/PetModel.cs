using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PetsAlone.Core;

namespace PetsAlone.Angular.Models
{
    public class PetModel
    {
        public string PetName { get; set; }

        public string PetType { get; set; } 

        public string MissingSince { get; set; }

        public My_Pet_Class GetBusinessEntity()
        {
            return new My_Pet_Class()
            {
                Name = this.PetName,
                PetType = Convert.ToInt32(this.PetType),
                MissingSince = DateTime.Parse(this.MissingSince)
            };
        }

        public bool IsValid(out string errorMsg)
        {
            if(!Int32.TryParse(this.PetType, out int petType))
            {
                errorMsg = "Please enter valid Pet Type";
                return false;
            }
            else if(!DateTime.TryParse(this.MissingSince, out DateTime res))
            {
                errorMsg = "Please enter valid Missing Since Date";
                return false;
            }

            errorMsg = string.Empty;
            return true;
        }
    }

    
}
