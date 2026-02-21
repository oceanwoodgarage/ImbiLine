export default async function handler(req, res) {
  const { lat, lng } = req.query;

  if (!lat || !lng) {
    return res.status(400).json({ error: "Latitude e longitude obrigatórias" });
  }

  try {
    const response = await fetch(
      `https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=waveHeight,wavePeriod,windSpeed`,
      {
        headers: {
          Authorization: process.env.STORMGLASS_API_KEY
        }
      }
    );

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error) {
    return res.status(500).json({ error: "Erro ao buscar dados" });
  }
}
