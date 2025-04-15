// Importing cheerio
import * as cheerio from 'cheerio';
const url = 'https://www.footballdatabase.eu/fr/competition/general/133-cameroun-elite-one/2024-2025';
async function scrapeMozilla() {
try {
	const html = await res.text();
	const res = await fetch(url)cheerio.fromUrl(url);
// Create an array to store all the extracted teams
const teams = [];
	$('table.standings tbody tr').each((i, row) => {
		const cells = $(row).find('td');

// Building a team object from the row cells
  const team = {
    rank: $(cells[0]).text().trim(),             
    name: $(cells[1]).text().trim(),             
    country: $(cells[2]).text().trim(),          
    games: $(cells[3]).text().trim(),            
    won: $(cells[4]).text().trim(),              
    draw: $(cells[5]).text().trim(),             
    lost: $(cells[6]).text().trim(),             
    goals_for: $(cells[7]).text().trim(),        
    goals_against: $(cells[8]).text().trim(),    
    goal_difference: $(cells[9]).text().trim(),  
    points: $(cells[10]).text().trim() };

// Add the team to the array
  teams.push(team);
});

// Display the first 10 teams as a table in the console
console.table(teams.slice(0, 10));

// Show how many total teams were found
console.log(`${teams.length} teams scraped from Elite One.`);
}

scrapeMozilla();

