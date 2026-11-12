-- Ejecuta este script en Supabase > SQL Editor.
-- Las opiniones se consultan desde Supabase > Table Editor > opiniones.

create table if not exists public.opiniones (
  id bigint generated always as identity primary key,
  created_at timestamptz not null default now(),
  tipo text not null
    check (tipo in ('Sugerencia', 'Queja', 'Felicitación')),
  nombre text
    check (nombre is null or char_length(btrim(nombre)) <= 60),
  contacto text
    check (contacto is null or char_length(btrim(contacto)) <= 100),
  mensaje text not null
    check (char_length(btrim(mensaje)) between 5 and 1000),
  leido boolean not null default false
);

-- Completa valores predeterminados en instalaciones anteriores de esta tabla.
update public.opiniones set created_at = now() where created_at is null;
update public.opiniones set leido = false where leido is null;
alter table public.opiniones
  alter column created_at set default now(),
  alter column created_at set not null,
  alter column leido set default false,
  alter column leido set not null;

alter table public.opiniones enable row level security;

-- El formulario público puede insertar opiniones y leer solo tipo, mensaje y fecha.
-- Los nombres, contactos y el estado de lectura permanecen privados.
revoke all on table public.opiniones from public, anon, authenticated;
grant usage on schema public to anon, authenticated;
grant insert (tipo, nombre, contacto, mensaje)
  on table public.opiniones to anon, authenticated;
revoke select (id, nombre, contacto, leido)
  on table public.opiniones from public, anon, authenticated;
grant select (created_at, tipo, mensaje)
  on table public.opiniones to anon, authenticated;

drop policy if exists "Cualquiera puede enviar opiniones" on public.opiniones;
create policy "Cualquiera puede enviar opiniones"
  on public.opiniones
  for insert
  to anon, authenticated
  with check (true);

drop policy if exists "Cualquiera puede ver opiniones públicas" on public.opiniones;
create policy "Cualquiera puede ver opiniones públicas"
  on public.opiniones
  for select
  to anon, authenticated
  using (true);

-- En java.js configura la URL del proyecto y la clave pública anon.
-- Nunca uses aquí ni en la web la clave secreta service_role.
