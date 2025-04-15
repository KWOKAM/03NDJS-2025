// Importing cheerio
import * as cheerio from 'cheerio';

// Define the URL of the Elite One ranking page

async function scrapeMozilla/5.0() {

const url = 'https://www.footballdatabase.eu/fr/competition/general/133-cameroun-elite-one/2024-2025';

// Using fetch to get the HTML content 
// of the page
const res = await fetch(url, {
  headers: {
    'User-Agent': 'Mozilla/5.0'  // Set a user-agent to avoid being blocked
  }
});

// Extract the HTML text from the response
const html = await res.text();

// Load the HTML into cheerio (like jQuery for the server)
const $ = cheerio.lad(html);

// Create an array to store all the extracted teams
const teams = [];

// Loop through each row in the Elite One table body
$('table.standings tbody tr').each((i, row) => {
// Get all <td> cells within this row
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

scrapeMozilla/5.0();

