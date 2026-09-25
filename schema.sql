CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TYPE service_type AS ENUM ('landing_page', 'web_app', 'automation');
CREATE TYPE payment_method AS ENUM ('zelle', 'cash');
CREATE TYPE quote_status AS ENUM ('pending', 'contacted', 'completed');

CREATE TABLE quote_requests (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    service service_type NOT NULL,
    payment payment_method NOT NULL,
    message TEXT,
    status quote_status DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;

-- Políticas de Seguridad
-- Permitir que cualquier usuario (incluso anónimos) pueda insertar (enviar) una cotización
CREATE POLICY "Permitir inserts anonimos" ON quote_requests 
FOR INSERT TO anon 
WITH CHECK (true);

-- Solo los administradores o usuarios autenticados pueden ver las solicitudes
CREATE POLICY "Permitir lectura a autenticados" ON quote_requests 
FOR SELECT TO authenticated 
USING (true);
