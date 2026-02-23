import { Client } from "pg";

const connectionString =
  "postgresql://postgres:q&nrRxnj-V.dzS4@db.sjtrmuurooonjbcljzks.supabase.co:5432/postgres";

const client = new Client({
  connectionString,
});

async function run() {
  try {
    await client.connect();
    console.log("Connected to Supabase.");

    const query = `
      CREATE TABLE IF NOT EXISTS site_content (
        key VARCHAR(255) PRIMARY KEY,
        value JSONB NOT NULL,
        description TEXT,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
      );

      -- Add Row Level Security (RLS) policies
      ALTER TABLE site_content ENABLE ROW LEVEL SECURITY;

      -- Create policy to allow public read access
      CREATE POLICY "Allow public read access to site_content" ON site_content
        FOR SELECT TO public USING (true);

      -- Policy to allow authenticated users to update
      CREATE POLICY "Allow authenticated users to insert/update site_content" ON site_content
        FOR ALL TO authenticated USING (true);
        
      -- Insert default content if empty
      INSERT INTO site_content (key, value, description)
      VALUES 
        ('rsvp_contacts', '["+491784377896", "+4915236345161", "+4917683170259"]'::jsonb, 'Contact numbers for RSVP section'),
        ('invitation_title', '"INVITATION"'::jsonb, 'Main title on header'),
        ('accommodation_deadline', '"July 10th, 2026"'::jsonb, 'Deadline for booking accommodation')
      ON CONFLICT DO NOTHING;
    `;

    await client.query(query);
    console.log("Successfully created site_content table and policies.");
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    await client.end();
  }
}

run();
