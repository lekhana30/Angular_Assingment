using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace TravelsAPI.Models
{
    public partial class TravelDBContext : DbContext
    {
        public TravelDBContext()
        {
        }

        public TravelDBContext(DbContextOptions<TravelDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TravelDetail> TravelDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<TravelDetail>(entity =>
            {
                entity.Property(e => e.Contact).HasColumnType("decimal(18, 0)");

                entity.Property(e => e.Destination).HasMaxLength(150);

                entity.Property(e => e.Email).HasMaxLength(50);

                entity.Property(e => e.Gender)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Name)
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.StayPeriod)
                    .HasMaxLength(150)
                    .HasColumnName("Stay_Period");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
