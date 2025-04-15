
// cheerio pour scraper et afficher le classement Elite One du Continent +237

const cheerio = require('cheerio'); importing cheerio library

const url = 'https://www.footballdatabase.eu/fr/competition/general/133-cameroun-elite-one/2024-2025';

async function scrapeEliteOne() {
  try {
    // Main Function
console.log('102817_KTRS_Scraper');

    // 
const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });
const html = await res.text();
const $ = cheerio.load(html);

const teams = [];

$('table.standings tbody tr').each((i, row) => {
const cells = $(row).find('td');

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
        points: $(cells[10]).text().trim()
      };

      teams.push(team);
    });

console.table(teams);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

scrapeEliteOne(); // commiting the file
