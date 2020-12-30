using Microsoft.EntityFrameworkCore.Migrations;

namespace BloodBankWebAPI.Migrations
{
    public partial class AddedAge : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "age",
                table: "DCandidates",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "age",
                table: "DCandidates");
        }
    }
}
