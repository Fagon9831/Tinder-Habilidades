-- DROP SCHEMA public;

CREATE SCHEMA public AUTHORIZATION pg_database_owner;

-- DROP SEQUENCE public.aplicantes_id_seq;

CREATE SEQUENCE public.aplicantes_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.chat_id_seq;

CREATE SEQUENCE public.chat_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.ciudades_id_seq;

CREATE SEQUENCE public.ciudades_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.contratos_id_seq;

CREATE SEQUENCE public.contratos_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.documento_id_seq;

CREATE SEQUENCE public.documento_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.empresas_id_seq;

CREATE SEQUENCE public.empresas_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.estados_contrato_id_seq;

CREATE SEQUENCE public.estados_contrato_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.habilidades_id_seq;

CREATE SEQUENCE public.habilidades_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.session_id_seq;

CREATE SEQUENCE public.session_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;
-- DROP SEQUENCE public.tipo_session_id_seq;

CREATE SEQUENCE public.tipo_session_id_seq
	INCREMENT BY 1
	MINVALUE 1
	MAXVALUE 9223372036854775807
	START 1
	CACHE 1
	NO CYCLE;-- public.ciudades definition

-- Drop table

-- DROP TABLE public.ciudades;

CREATE TABLE public.ciudades (
	id bigserial NOT NULL,
	ciudad varchar NOT NULL,
	CONSTRAINT ciudades_pk PRIMARY KEY (id)
);


-- public.documentos definition

-- Drop table

-- DROP TABLE public.documentos;

CREATE TABLE public.documentos (
	id_documento int8 NOT NULL DEFAULT nextval('documento_id_seq'::regclass),
	tipo_documento varchar NULL,
	CONSTRAINT documentos_pk PRIMARY KEY (id_documento)
);


-- public.estados_contrato definition

-- Drop table

-- DROP TABLE public.estados_contrato;

CREATE TABLE public.estados_contrato (
	id_estado int8 NOT NULL,
	estado varchar NULL,
	CONSTRAINT estados_contrato_pk PRIMARY KEY (id_estado)
);


-- public.habilidades definition

-- Drop table

-- DROP TABLE public.habilidades;

CREATE TABLE public.habilidades (
	id_habilidad int8 NOT NULL DEFAULT nextval('habilidades_id_seq'::regclass),
	habilidad varchar NULL,
	CONSTRAINT habilidades_pk PRIMARY KEY (id_habilidad)
);


-- public.tipo_session definition

-- Drop table

-- DROP TABLE public.tipo_session;

CREATE TABLE public.tipo_session (
	id_tipo int8 NOT NULL DEFAULT nextval('tipo_session_id_seq'::regclass),
	tipo varchar NOT NULL,
	CONSTRAINT tipo_session_pk PRIMARY KEY (id_tipo)
);


-- public."session" definition

-- Drop table

-- DROP TABLE public."session";

CREATE TABLE public."session" (
	id_session int8 NOT NULL DEFAULT nextval('session_id_seq'::regclass),
	usuario varchar NULL,
	contraseña varchar NULL,
	code_session varchar NULL,
	tipo_id int8 NULL,
	CONSTRAINT session_pk PRIMARY KEY (id_session),
	CONSTRAINT session_un UNIQUE (code_session),
	CONSTRAINT session_fk FOREIGN KEY (tipo_id) REFERENCES public.tipo_session(id_tipo)
);


-- public.aplicantes definition

-- Drop table

-- DROP TABLE public.aplicantes;

CREATE TABLE public.aplicantes (
	id_aplicante int8 NOT NULL DEFAULT nextval('aplicantes_id_seq'::regclass),
	nombre varchar NOT NULL,
	apellido varchar NOT NULL,
	direccion varchar NOT NULL,
	telefono int8 NOT NULL,
	carrera varchar NOT NULL,
	ciudad_id int8 NOT NULL,
	documento int8 NOT NULL,
	documento_id int8 NOT NULL,
	habilidad1_id int8 NOT NULL,
	habilidad2_id int8 NULL,
	habilidad3_id int8 NULL,
	habilidad4_id int8 NULL,
	habilidad5_id int8 NULL,
	correo varchar NULL,
	session_code varchar NOT NULL,
	valor_hora int8 NULL,
	url varchar NULL,
	CONSTRAINT aplicantes_pk PRIMARY KEY (id_aplicante),
	CONSTRAINT ciudades_fk FOREIGN KEY (ciudad_id) REFERENCES public.ciudades(id),
	CONSTRAINT documentos_fk FOREIGN KEY (documento_id) REFERENCES public.documentos(id_documento),
	CONSTRAINT habilidad1_fk FOREIGN KEY (habilidad1_id) REFERENCES public.habilidades(id_habilidad),
	CONSTRAINT habilidad2_fk FOREIGN KEY (habilidad2_id) REFERENCES public.habilidades(id_habilidad),
	CONSTRAINT habilidad3_fk FOREIGN KEY (habilidad3_id) REFERENCES public.habilidades(id_habilidad),
	CONSTRAINT habilidad4_fk FOREIGN KEY (habilidad4_id) REFERENCES public.habilidades(id_habilidad),
	CONSTRAINT habilidad5_fk FOREIGN KEY (habilidad5_id) REFERENCES public.habilidades(id_habilidad),
	CONSTRAINT sesiones_fk FOREIGN KEY (session_code) REFERENCES public."session"(code_session)
);


-- public.chat definition

-- Drop table

-- DROP TABLE public.chat;

CREATE TABLE public.chat (
	id_chat int8 NULL DEFAULT nextval('chat_id_seq'::regclass),
	message varchar NULL,
	code_chat varchar NULL,
	sesion_e varchar NULL,
	sesion_a varchar NULL,
	fecha timestamp NULL,
	CONSTRAINT sesiona_fk FOREIGN KEY (sesion_a) REFERENCES public."session"(code_session),
	CONSTRAINT sesione_fk FOREIGN KEY (sesion_e) REFERENCES public."session"(code_session)
);


-- public.contratos definition

-- Drop table

-- DROP TABLE public.contratos;

CREATE TABLE public.contratos (
	id_contrato int8 NOT NULL DEFAULT nextval('contratos_id_seq'::regclass),
	ubicacion varchar NULL,
	tiempo int8 NULL,
	fecha_inicio timestamp NULL,
	comentarios_finales varchar NULL,
	session_e varchar NULL,
	session_a varchar NULL,
	ciudad int8 NULL,
	estado_code int8 NULL,
	funciones varchar NULL,
	CONSTRAINT contratos_pk PRIMARY KEY (id_contrato),
	CONSTRAINT contratoestados_fk FOREIGN KEY (estado_code) REFERENCES public.estados_contrato(id_estado),
	CONSTRAINT contratos_fk FOREIGN KEY (ciudad) REFERENCES public.ciudades(id),
	CONSTRAINT sesiona_fk FOREIGN KEY (session_a) REFERENCES public."session"(code_session),
	CONSTRAINT sesione_fk FOREIGN KEY (session_e) REFERENCES public."session"(code_session)
);


-- public.empresas definition

-- Drop table

-- DROP TABLE public.empresas;

CREATE TABLE public.empresas (
	id_empresa int8 NOT NULL DEFAULT nextval('empresas_id_seq'::regclass),
	nombre varchar NULL,
	direccion varchar NULL,
	telefono int8 NULL,
	sector varchar NULL,
	ciudad_id int8 NULL,
	documento int8 NULL,
	documento_id int8 NULL,
	correo varchar NULL,
	session_code varchar NULL,
	CONSTRAINT empresas_pk PRIMARY KEY (id_empresa),
	CONSTRAINT documentos_fk FOREIGN KEY (documento_id) REFERENCES public.documentos(id_documento),
	CONSTRAINT empresas_fk FOREIGN KEY (ciudad_id) REFERENCES public.ciudades(id),
	CONSTRAINT sesiones_fk FOREIGN KEY (session_code) REFERENCES public."session"(code_session)
);
