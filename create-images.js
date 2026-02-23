import { Client } from "pg";

const connectionString =
  "postgresql://postgres:q&nrRxnj-V.dzS4@db.sjtrmuurooonjbcljzks.supabase.co:5432/postgres";

const client = new Client({
  connectionString,
});

async function run() {
  try {
    await client.connect();
    const query = `
      INSERT INTO site_content (key, value, description)
      VALUES 
        ('image_main_bg', '"/images/generated/summer_wedding_bg.png"'::jsonb, 'Main Background Image'),
        ('image_couple', '"/images/generated/original.jpeg"'::jsonb, 'Couple Photo inside envelope'),
        ('image_accommodations', '"/images/generated/accommodations-luggage.png"'::jsonb, 'Accommodations section image'),
        ('image_wax_seal', '"/images/generated/custom_wax_seal_zh.png"'::jsonb, 'Wax Seal Image')
      ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value;
    `;
    await client.query(query);
    console.log("Successfully inserted default image keys.");
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    await client.end();
  }
}
run();
