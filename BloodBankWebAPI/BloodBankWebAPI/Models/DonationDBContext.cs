using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace BloodBankWebAPI.Models
{
    public class DonationDBContext: DbContext
    {
        public DonationDBContext(DbContextOptions<DonationDBContext> options):base(options)
        {
                
        }

        public DbSet<DCandidate> DCandidates { get; set; }
    }
}
