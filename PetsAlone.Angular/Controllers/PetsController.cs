using Microsoft.AspNetCore.Mvc;
using PetsAlone.Angular.Models;
using PetsAlone.Core;
using System.Threading.Tasks;

namespace PetsAlone.Angular.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PetsController : ControllerBase
    {
        private readonly PetsDbContext _petsDbContext;
        public PetsController(PetsDbContext petsDbContext)
        {
            _petsDbContext = petsDbContext;
        }

        [HttpGet("all")]
        public object GetAll()
        {
            var petsService = new PetsService();
            var result = petsService.GetAll(_petsDbContext);
            return result;
        }

        [HttpPost("add")]
        public async Task<IActionResult> AddPet([FromBody] PetModel petModel)
        {
            if (!petModel.IsValid(out string errorMsg))
                return Ok(ResponseModel.CreateBadResponse(errorMsg));

            var petsService = new PetsService();
            await petsService.AddPetAsync(petModel.GetBusinessEntity(), _petsDbContext);
            var response = ResponseModel.CreateOkResponse("Missing Pet Added Successfully");
            return Ok(response);
            
        }
    }
}