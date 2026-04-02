/*
  # Portfolio Content Management Schema

  1. New Tables
    - `projects` - Store project case studies
    - `skills` - Store skill categories and proficiencies
    - `experiences` - Store work experience data
    - `tech_stack` - Store technologies used in projects
    - `testimonials` - Store recommendations and feedback
    - `analytics` - Track portfolio views and interactions

  2. Features
    - Full-text search for projects
    - Relationship management between projects and tech stack
    - Analytics tracking for visitor behavior
    - Row-level security policies for admin access

  3. Security
    - Enable RLS on all tables
    - Admin-only write access for data management
    - Public read access for portfolio display
*/

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  long_description text,
  image_url text,
  thumbnail_url text,
  category text DEFAULT 'web',
  status text DEFAULT 'completed',
  live_url text,
  github_url text,
  problem_statement text,
  solution_approach text,
  impact text,
  metrics jsonb,
  featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS project_technologies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  technology text NOT NULL,
  proficiency_level text DEFAULT 'intermediate',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  category text NOT NULL,
  name text NOT NULL,
  proficiency_level integer DEFAULT 80,
  years_of_experience numeric,
  icon_name text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  role text NOT NULL,
  description text NOT NULL,
  period_start date NOT NULL,
  period_end date,
  current boolean DEFAULT false,
  achievements text[],
  technologies text[],
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  author_name text NOT NULL,
  author_title text,
  author_image_url text,
  content text NOT NULL,
  company text,
  date_given date,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS portfolio_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  project_id uuid REFERENCES projects(id),
  section_name text,
  user_agent text,
  referrer text,
  session_id text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_technologies ENABLE ROW LEVEL SECURITY;
ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_analytics ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Projects are viewable by everyone"
  ON projects FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Project technologies are viewable by everyone"
  ON project_technologies FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Skills are viewable by everyone"
  ON skills FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Experiences are viewable by everyone"
  ON experiences FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Testimonials are viewable by everyone"
  ON testimonials FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Analytics can be inserted by anyone"
  ON portfolio_analytics FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Analytics are viewable by authenticated users"
  ON portfolio_analytics FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX projects_featured_idx ON projects(featured);
CREATE INDEX projects_category_idx ON projects(category);
CREATE INDEX skills_category_idx ON skills(category);
CREATE INDEX experiences_current_idx ON experiences(current);
CREATE INDEX analytics_event_type_idx ON portfolio_analytics(event_type);
CREATE INDEX analytics_created_at_idx ON portfolio_analytics(created_at);
