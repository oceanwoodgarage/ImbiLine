export default async function handler(req, res) {

const { lat, lng } = req.query;

const url = `https://marine-api.open-meteo.com/v1/marine?latitude=${lat}&longitude=${lng}&hourly=wave_height,wave_period,wave_direction,wind_speed_10m,wind_direction_10m&timezone=auto`;

try {
  const response = await fetch(url);
  const data = await response.json();
  res.status(200).json(data);
} catch (error) {
  res.status(500).json({ error: "Erro ao buscar dados" });
}

}
