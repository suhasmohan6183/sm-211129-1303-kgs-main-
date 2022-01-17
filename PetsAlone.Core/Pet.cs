using System;
using System.ComponentModel.DataAnnotations;

namespace PetsAlone.Core
{
    // pet class
    public class My_Pet_Class
    {
        [Key]
        // the id
        public int Id { get; set; }
        
        // the name
        public string Name { get; set; }
        
        // type
        public int PetType { get; set; } // 1 = Cat, 2 = Dog, 3 = Hamster, 4 = Bird, 5 = Rabbit, 6 = Fish, 7 = Lizard, 8 = Horse, 9 = Gerbil, 10 = Tortoise
        
        // missing since
        public DateTime MissingSince { get; set; }

        public string DisplayMissingSince
        {
            get
            {
                return this.MissingSince.ToString("dd MMM yyyy");
            }
        }

        public string DisplayPetType
        {
            get
            {
                switch(this.PetType)
                {
                    case 1: return "Cat";
                    case 2: return "Dog";
                    case 3: return "Hamster";
                    case 4: return "Bird";
                    case 5: return "Rabbit";
                    case 6: return "Fish";
                    case 7: return "Lizard";
                    case 8: return "Horse";
                    case 9: return "Gerbil";
                    case 10: return "Tortoise";
                    default: return "Unknown Pet Type";
                }
            }
        }
    }
}