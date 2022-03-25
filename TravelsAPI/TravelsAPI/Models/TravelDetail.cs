using System;
using System.Collections.Generic;

#nullable disable

namespace TravelsAPI.Models
{
    public partial class TravelDetail
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public int? Age { get; set; }
        public string Gender { get; set; }
        public decimal? Contact { get; set; }
        public string Destination { get; set; }
        public string StayPeriod { get; set; }
    }
}
