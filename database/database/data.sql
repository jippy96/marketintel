PGDMP     $                    x         
   education2    12.2    12.2 �    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16917 
   education2    DATABASE     �   CREATE DATABASE education2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LC_COLLATE = 'French_Senegal.1252' LC_CTYPE = 'French_Senegal.1252';
    DROP DATABASE education2;
                postgres    false            �            1259    16949 
   auth_group    TABLE     f   CREATE TABLE public.auth_group (
    id integer NOT NULL,
    name character varying(150) NOT NULL
);
    DROP TABLE public.auth_group;
       public         heap    postgres    false            �            1259    16947    auth_group_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_group_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.auth_group_id_seq;
       public          postgres    false    209            �           0    0    auth_group_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.auth_group_id_seq OWNED BY public.auth_group.id;
          public          postgres    false    208            �            1259    16959    auth_group_permissions    TABLE     �   CREATE TABLE public.auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);
 *   DROP TABLE public.auth_group_permissions;
       public         heap    postgres    false            �            1259    16957    auth_group_permissions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_group_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 4   DROP SEQUENCE public.auth_group_permissions_id_seq;
       public          postgres    false    211            �           0    0    auth_group_permissions_id_seq    SEQUENCE OWNED BY     _   ALTER SEQUENCE public.auth_group_permissions_id_seq OWNED BY public.auth_group_permissions.id;
          public          postgres    false    210            �            1259    16941    auth_permission    TABLE     �   CREATE TABLE public.auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);
 #   DROP TABLE public.auth_permission;
       public         heap    postgres    false            �            1259    16939    auth_permission_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_permission_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.auth_permission_id_seq;
       public          postgres    false    207            �           0    0    auth_permission_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.auth_permission_id_seq OWNED BY public.auth_permission.id;
          public          postgres    false    206            �            1259    16967 	   auth_user    TABLE     �  CREATE TABLE public.auth_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    username character varying(150) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(150) NOT NULL,
    email character varying(254) NOT NULL,
    is_staff boolean NOT NULL,
    is_active boolean NOT NULL,
    date_joined timestamp with time zone NOT NULL
);
    DROP TABLE public.auth_user;
       public         heap    postgres    false            �            1259    16977    auth_user_groups    TABLE        CREATE TABLE public.auth_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);
 $   DROP TABLE public.auth_user_groups;
       public         heap    postgres    false            �            1259    16975    auth_user_groups_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_user_groups_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.auth_user_groups_id_seq;
       public          postgres    false    215            �           0    0    auth_user_groups_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.auth_user_groups_id_seq OWNED BY public.auth_user_groups.id;
          public          postgres    false    214            �            1259    16965    auth_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 '   DROP SEQUENCE public.auth_user_id_seq;
       public          postgres    false    213            �           0    0    auth_user_id_seq    SEQUENCE OWNED BY     E   ALTER SEQUENCE public.auth_user_id_seq OWNED BY public.auth_user.id;
          public          postgres    false    212            �            1259    16985    auth_user_user_permissions    TABLE     �   CREATE TABLE public.auth_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);
 .   DROP TABLE public.auth_user_user_permissions;
       public         heap    postgres    false            �            1259    16983 !   auth_user_user_permissions_id_seq    SEQUENCE     �   CREATE SEQUENCE public.auth_user_user_permissions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 8   DROP SEQUENCE public.auth_user_user_permissions_id_seq;
       public          postgres    false    217            �           0    0 !   auth_user_user_permissions_id_seq    SEQUENCE OWNED BY     g   ALTER SEQUENCE public.auth_user_user_permissions_id_seq OWNED BY public.auth_user_user_permissions.id;
          public          postgres    false    216            �            1259    17045    django_admin_log    TABLE     �  CREATE TABLE public.django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);
 $   DROP TABLE public.django_admin_log;
       public         heap    postgres    false            �            1259    17043    django_admin_log_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_admin_log_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.django_admin_log_id_seq;
       public          postgres    false    219            �           0    0    django_admin_log_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.django_admin_log_id_seq OWNED BY public.django_admin_log.id;
          public          postgres    false    218            �            1259    16931    django_content_type    TABLE     �   CREATE TABLE public.django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);
 '   DROP TABLE public.django_content_type;
       public         heap    postgres    false            �            1259    16929    django_content_type_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_content_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.django_content_type_id_seq;
       public          postgres    false    205            �           0    0    django_content_type_id_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.django_content_type_id_seq OWNED BY public.django_content_type.id;
          public          postgres    false    204            �            1259    16920    django_migrations    TABLE     �   CREATE TABLE public.django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);
 %   DROP TABLE public.django_migrations;
       public         heap    postgres    false            �            1259    16918    django_migrations_id_seq    SEQUENCE     �   CREATE SEQUENCE public.django_migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.django_migrations_id_seq;
       public          postgres    false    203            �           0    0    django_migrations_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.django_migrations_id_seq OWNED BY public.django_migrations.id;
          public          postgres    false    202            �            1259    17120    django_session    TABLE     �   CREATE TABLE public.django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);
 "   DROP TABLE public.django_session;
       public         heap    postgres    false            �            1259    17151 -   modele_demande_potentielle_en_2018_par_region    TABLE       CREATE TABLE public.modele_demande_potentielle_en_2018_par_region (
    id integer NOT NULL,
    region character varying(20) NOT NULL,
    garcon integer NOT NULL,
    fille integer NOT NULL,
    total integer NOT NULL,
    poid_de_la_region double precision NOT NULL
);
 A   DROP TABLE public.modele_demande_potentielle_en_2018_par_region;
       public         heap    postgres    false            �            1259    17149 4   modele_demande_potentielle_en_2018_par_region_id_seq    SEQUENCE     �   CREATE SEQUENCE public.modele_demande_potentielle_en_2018_par_region_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 K   DROP SEQUENCE public.modele_demande_potentielle_en_2018_par_region_id_seq;
       public          postgres    false    222            �           0    0 4   modele_demande_potentielle_en_2018_par_region_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.modele_demande_potentielle_en_2018_par_region_id_seq OWNED BY public.modele_demande_potentielle_en_2018_par_region.id;
          public          postgres    false    221            �            1259    17161    modele_population_scolarisable    TABLE     )  CREATE TABLE public.modele_population_scolarisable (
    id integer NOT NULL,
    region character varying(20) NOT NULL,
    garcon integer NOT NULL,
    fille integer NOT NULL,
    total integer NOT NULL,
    pourcent_fille double precision NOT NULL,
    part_region double precision NOT NULL
);
 2   DROP TABLE public.modele_population_scolarisable;
       public         heap    postgres    false            �            1259    17159 %   modele_population_scolarisable_id_seq    SEQUENCE     �   CREATE SEQUENCE public.modele_population_scolarisable_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 <   DROP SEQUENCE public.modele_population_scolarisable_id_seq;
       public          postgres    false    224            �           0    0 %   modele_population_scolarisable_id_seq    SEQUENCE OWNED BY     o   ALTER SEQUENCE public.modele_population_scolarisable_id_seq OWNED BY public.modele_population_scolarisable.id;
          public          postgres    false    223            �            1259    17171 1   modele_repartition_du_taux_brute_de_scolarisation    TABLE     0  CREATE TABLE public.modele_repartition_du_taux_brute_de_scolarisation (
    id integer NOT NULL,
    region character varying(20) NOT NULL,
    garcon double precision NOT NULL,
    fille double precision NOT NULL,
    total double precision NOT NULL,
    "Indice_de_parite" double precision NOT NULL
);
 E   DROP TABLE public.modele_repartition_du_taux_brute_de_scolarisation;
       public         heap    postgres    false            �            1259    17169 8   modele_repartition_du_taux_brute_de_scolarisation_id_seq    SEQUENCE     �   CREATE SEQUENCE public.modele_repartition_du_taux_brute_de_scolarisation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 O   DROP SEQUENCE public.modele_repartition_du_taux_brute_de_scolarisation_id_seq;
       public          postgres    false    226            �           0    0 8   modele_repartition_du_taux_brute_de_scolarisation_id_seq    SEQUENCE OWNED BY     �   ALTER SEQUENCE public.modele_repartition_du_taux_brute_de_scolarisation_id_seq OWNED BY public.modele_repartition_du_taux_brute_de_scolarisation.id;
          public          postgres    false    225            �            1259    17181 "   modele_taux_brute_de_scolarisation    TABLE        CREATE TABLE public.modele_taux_brute_de_scolarisation (
    id integer NOT NULL,
    region character varying(20) NOT NULL,
    garcon double precision NOT NULL,
    fille double precision NOT NULL,
    total double precision NOT NULL,
    poid_de_la_region double precision NOT NULL
);
 6   DROP TABLE public.modele_taux_brute_de_scolarisation;
       public         heap    postgres    false            �            1259    17179 )   modele_taux_brute_de_scolarisation_id_seq    SEQUENCE     �   CREATE SEQUENCE public.modele_taux_brute_de_scolarisation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 @   DROP SEQUENCE public.modele_taux_brute_de_scolarisation_id_seq;
       public          postgres    false    228            �           0    0 )   modele_taux_brute_de_scolarisation_id_seq    SEQUENCE OWNED BY     w   ALTER SEQUENCE public.modele_taux_brute_de_scolarisation_id_seq OWNED BY public.modele_taux_brute_de_scolarisation.id;
          public          postgres    false    227            �
           2604    16952    auth_group id    DEFAULT     n   ALTER TABLE ONLY public.auth_group ALTER COLUMN id SET DEFAULT nextval('public.auth_group_id_seq'::regclass);
 <   ALTER TABLE public.auth_group ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    208    209    209            �
           2604    16962    auth_group_permissions id    DEFAULT     �   ALTER TABLE ONLY public.auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_group_permissions_id_seq'::regclass);
 H   ALTER TABLE public.auth_group_permissions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            �
           2604    16944    auth_permission id    DEFAULT     x   ALTER TABLE ONLY public.auth_permission ALTER COLUMN id SET DEFAULT nextval('public.auth_permission_id_seq'::regclass);
 A   ALTER TABLE public.auth_permission ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            �
           2604    16970    auth_user id    DEFAULT     l   ALTER TABLE ONLY public.auth_user ALTER COLUMN id SET DEFAULT nextval('public.auth_user_id_seq'::regclass);
 ;   ALTER TABLE public.auth_user ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            �
           2604    16980    auth_user_groups id    DEFAULT     z   ALTER TABLE ONLY public.auth_user_groups ALTER COLUMN id SET DEFAULT nextval('public.auth_user_groups_id_seq'::regclass);
 B   ALTER TABLE public.auth_user_groups ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    214    215    215            �
           2604    16988    auth_user_user_permissions id    DEFAULT     �   ALTER TABLE ONLY public.auth_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('public.auth_user_user_permissions_id_seq'::regclass);
 L   ALTER TABLE public.auth_user_user_permissions ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �
           2604    17048    django_admin_log id    DEFAULT     z   ALTER TABLE ONLY public.django_admin_log ALTER COLUMN id SET DEFAULT nextval('public.django_admin_log_id_seq'::regclass);
 B   ALTER TABLE public.django_admin_log ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    218    219    219            �
           2604    16934    django_content_type id    DEFAULT     �   ALTER TABLE ONLY public.django_content_type ALTER COLUMN id SET DEFAULT nextval('public.django_content_type_id_seq'::regclass);
 E   ALTER TABLE public.django_content_type ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            �
           2604    16923    django_migrations id    DEFAULT     |   ALTER TABLE ONLY public.django_migrations ALTER COLUMN id SET DEFAULT nextval('public.django_migrations_id_seq'::regclass);
 C   ALTER TABLE public.django_migrations ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            �
           2604    17154 0   modele_demande_potentielle_en_2018_par_region id    DEFAULT     �   ALTER TABLE ONLY public.modele_demande_potentielle_en_2018_par_region ALTER COLUMN id SET DEFAULT nextval('public.modele_demande_potentielle_en_2018_par_region_id_seq'::regclass);
 _   ALTER TABLE public.modele_demande_potentielle_en_2018_par_region ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    221    222    222            �
           2604    17164 !   modele_population_scolarisable id    DEFAULT     �   ALTER TABLE ONLY public.modele_population_scolarisable ALTER COLUMN id SET DEFAULT nextval('public.modele_population_scolarisable_id_seq'::regclass);
 P   ALTER TABLE public.modele_population_scolarisable ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    223    224    224            �
           2604    17174 4   modele_repartition_du_taux_brute_de_scolarisation id    DEFAULT     �   ALTER TABLE ONLY public.modele_repartition_du_taux_brute_de_scolarisation ALTER COLUMN id SET DEFAULT nextval('public.modele_repartition_du_taux_brute_de_scolarisation_id_seq'::regclass);
 c   ALTER TABLE public.modele_repartition_du_taux_brute_de_scolarisation ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    226    225    226            �
           2604    17184 %   modele_taux_brute_de_scolarisation id    DEFAULT     �   ALTER TABLE ONLY public.modele_taux_brute_de_scolarisation ALTER COLUMN id SET DEFAULT nextval('public.modele_taux_brute_de_scolarisation_id_seq'::regclass);
 T   ALTER TABLE public.modele_taux_brute_de_scolarisation ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    227    228    228            �          0    16949 
   auth_group 
   TABLE DATA           .   COPY public.auth_group (id, name) FROM stdin;
    public          postgres    false    209   ��       �          0    16959    auth_group_permissions 
   TABLE DATA           M   COPY public.auth_group_permissions (id, group_id, permission_id) FROM stdin;
    public          postgres    false    211   ü       �          0    16941    auth_permission 
   TABLE DATA           N   COPY public.auth_permission (id, name, content_type_id, codename) FROM stdin;
    public          postgres    false    207   �       �          0    16967 	   auth_user 
   TABLE DATA           �   COPY public.auth_user (id, password, last_login, is_superuser, username, first_name, last_name, email, is_staff, is_active, date_joined) FROM stdin;
    public          postgres    false    213   ھ       �          0    16977    auth_user_groups 
   TABLE DATA           A   COPY public.auth_user_groups (id, user_id, group_id) FROM stdin;
    public          postgres    false    215   ��       �          0    16985    auth_user_user_permissions 
   TABLE DATA           P   COPY public.auth_user_user_permissions (id, user_id, permission_id) FROM stdin;
    public          postgres    false    217   �       �          0    17045    django_admin_log 
   TABLE DATA           �   COPY public.django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
    public          postgres    false    219   1�       �          0    16931    django_content_type 
   TABLE DATA           C   COPY public.django_content_type (id, app_label, model) FROM stdin;
    public          postgres    false    205   N�       �          0    16920    django_migrations 
   TABLE DATA           C   COPY public.django_migrations (id, app, name, applied) FROM stdin;
    public          postgres    false    203   �       �          0    17120    django_session 
   TABLE DATA           P   COPY public.django_session (session_key, session_data, expire_date) FROM stdin;
    public          postgres    false    220   ��       �          0    17151 -   modele_demande_potentielle_en_2018_par_region 
   TABLE DATA           |   COPY public.modele_demande_potentielle_en_2018_par_region (id, region, garcon, fille, total, poid_de_la_region) FROM stdin;
    public          postgres    false    222   ��       �          0    17161    modele_population_scolarisable 
   TABLE DATA           w   COPY public.modele_population_scolarisable (id, region, garcon, fille, total, pourcent_fille, part_region) FROM stdin;
    public          postgres    false    224   D�       �          0    17171 1   modele_repartition_du_taux_brute_de_scolarisation 
   TABLE DATA           �   COPY public.modele_repartition_du_taux_brute_de_scolarisation (id, region, garcon, fille, total, "Indice_de_parite") FROM stdin;
    public          postgres    false    226    �       �          0    17181 "   modele_taux_brute_de_scolarisation 
   TABLE DATA           q   COPY public.modele_taux_brute_de_scolarisation (id, region, garcon, fille, total, poid_de_la_region) FROM stdin;
    public          postgres    false    228   B�       �           0    0    auth_group_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);
          public          postgres    false    208            �           0    0    auth_group_permissions_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);
          public          postgres    false    210            �           0    0    auth_permission_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.auth_permission_id_seq', 40, true);
          public          postgres    false    206            �           0    0    auth_user_groups_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);
          public          postgres    false    214            �           0    0    auth_user_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.auth_user_id_seq', 1, false);
          public          postgres    false    212            �           0    0 !   auth_user_user_permissions_id_seq    SEQUENCE SET     P   SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);
          public          postgres    false    216            �           0    0    django_admin_log_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.django_admin_log_id_seq', 1, false);
          public          postgres    false    218            �           0    0    django_content_type_id_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.django_content_type_id_seq', 10, true);
          public          postgres    false    204            �           0    0    django_migrations_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.django_migrations_id_seq', 19, true);
          public          postgres    false    202            �           0    0 4   modele_demande_potentielle_en_2018_par_region_id_seq    SEQUENCE SET     c   SELECT pg_catalog.setval('public.modele_demande_potentielle_en_2018_par_region_id_seq', 15, true);
          public          postgres    false    221            �           0    0 %   modele_population_scolarisable_id_seq    SEQUENCE SET     T   SELECT pg_catalog.setval('public.modele_population_scolarisable_id_seq', 18, true);
          public          postgres    false    223            �           0    0 8   modele_repartition_du_taux_brute_de_scolarisation_id_seq    SEQUENCE SET     g   SELECT pg_catalog.setval('public.modele_repartition_du_taux_brute_de_scolarisation_id_seq', 15, true);
          public          postgres    false    225            �           0    0 )   modele_taux_brute_de_scolarisation_id_seq    SEQUENCE SET     X   SELECT pg_catalog.setval('public.modele_taux_brute_de_scolarisation_id_seq', 17, true);
          public          postgres    false    227            �
           2606    17074    auth_group auth_group_name_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);
 H   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_name_key;
       public            postgres    false    209            �
           2606    17001 R   auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);
 |   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq;
       public            postgres    false    211    211            �
           2606    16964 2   auth_group_permissions auth_group_permissions_pkey 
   CONSTRAINT     p   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);
 \   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_pkey;
       public            postgres    false    211            �
           2606    16954    auth_group auth_group_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.auth_group DROP CONSTRAINT auth_group_pkey;
       public            postgres    false    209            �
           2606    16992 F   auth_permission auth_permission_content_type_id_codename_01ab375a_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);
 p   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq;
       public            postgres    false    207    207            �
           2606    16946 $   auth_permission auth_permission_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_pkey;
       public            postgres    false    207            �
           2606    16982 &   auth_user_groups auth_user_groups_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.auth_user_groups DROP CONSTRAINT auth_user_groups_pkey;
       public            postgres    false    215            �
           2606    17016 @   auth_user_groups auth_user_groups_user_id_group_id_94350c0c_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq UNIQUE (user_id, group_id);
 j   ALTER TABLE ONLY public.auth_user_groups DROP CONSTRAINT auth_user_groups_user_id_group_id_94350c0c_uniq;
       public            postgres    false    215    215            �
           2606    16972    auth_user auth_user_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_pkey PRIMARY KEY (id);
 B   ALTER TABLE ONLY public.auth_user DROP CONSTRAINT auth_user_pkey;
       public            postgres    false    213                        2606    16990 :   auth_user_user_permissions auth_user_user_permissions_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_pkey PRIMARY KEY (id);
 d   ALTER TABLE ONLY public.auth_user_user_permissions DROP CONSTRAINT auth_user_user_permissions_pkey;
       public            postgres    false    217                       2606    17030 Y   auth_user_user_permissions auth_user_user_permissions_user_id_permission_id_14a6b632_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq UNIQUE (user_id, permission_id);
 �   ALTER TABLE ONLY public.auth_user_user_permissions DROP CONSTRAINT auth_user_user_permissions_user_id_permission_id_14a6b632_uniq;
       public            postgres    false    217    217            �
           2606    17068     auth_user auth_user_username_key 
   CONSTRAINT     _   ALTER TABLE ONLY public.auth_user
    ADD CONSTRAINT auth_user_username_key UNIQUE (username);
 J   ALTER TABLE ONLY public.auth_user DROP CONSTRAINT auth_user_username_key;
       public            postgres    false    213                       2606    17054 &   django_admin_log django_admin_log_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_pkey;
       public            postgres    false    219            �
           2606    16938 E   django_content_type django_content_type_app_label_model_76bd3d3b_uniq 
   CONSTRAINT     �   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);
 o   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq;
       public            postgres    false    205    205            �
           2606    16936 ,   django_content_type django_content_type_pkey 
   CONSTRAINT     j   ALTER TABLE ONLY public.django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);
 V   ALTER TABLE ONLY public.django_content_type DROP CONSTRAINT django_content_type_pkey;
       public            postgres    false    205            �
           2606    16928 (   django_migrations django_migrations_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.django_migrations DROP CONSTRAINT django_migrations_pkey;
       public            postgres    false    203            
           2606    17127 "   django_session django_session_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);
 L   ALTER TABLE ONLY public.django_session DROP CONSTRAINT django_session_pkey;
       public            postgres    false    220                       2606    17156 `   modele_demande_potentielle_en_2018_par_region modele_demande_potentielle_en_2018_par_region_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_demande_potentielle_en_2018_par_region
    ADD CONSTRAINT modele_demande_potentielle_en_2018_par_region_pkey PRIMARY KEY (id);
 �   ALTER TABLE ONLY public.modele_demande_potentielle_en_2018_par_region DROP CONSTRAINT modele_demande_potentielle_en_2018_par_region_pkey;
       public            postgres    false    222                       2606    17158 f   modele_demande_potentielle_en_2018_par_region modele_demande_potentielle_en_2018_par_region_region_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_demande_potentielle_en_2018_par_region
    ADD CONSTRAINT modele_demande_potentielle_en_2018_par_region_region_key UNIQUE (region);
 �   ALTER TABLE ONLY public.modele_demande_potentielle_en_2018_par_region DROP CONSTRAINT modele_demande_potentielle_en_2018_par_region_region_key;
       public            postgres    false    222                       2606    17166 B   modele_population_scolarisable modele_population_scolarisable_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_population_scolarisable
    ADD CONSTRAINT modele_population_scolarisable_pkey PRIMARY KEY (id);
 l   ALTER TABLE ONLY public.modele_population_scolarisable DROP CONSTRAINT modele_population_scolarisable_pkey;
       public            postgres    false    224                       2606    17168 H   modele_population_scolarisable modele_population_scolarisable_region_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_population_scolarisable
    ADD CONSTRAINT modele_population_scolarisable_region_key UNIQUE (region);
 r   ALTER TABLE ONLY public.modele_population_scolarisable DROP CONSTRAINT modele_population_scolarisable_region_key;
       public            postgres    false    224                       2606    17176 h   modele_repartition_du_taux_brute_de_scolarisation modele_repartition_du_taux_brute_de_scolarisation_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_repartition_du_taux_brute_de_scolarisation
    ADD CONSTRAINT modele_repartition_du_taux_brute_de_scolarisation_pkey PRIMARY KEY (id);
 �   ALTER TABLE ONLY public.modele_repartition_du_taux_brute_de_scolarisation DROP CONSTRAINT modele_repartition_du_taux_brute_de_scolarisation_pkey;
       public            postgres    false    226                       2606    17178 n   modele_repartition_du_taux_brute_de_scolarisation modele_repartition_du_taux_brute_de_scolarisation_region_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_repartition_du_taux_brute_de_scolarisation
    ADD CONSTRAINT modele_repartition_du_taux_brute_de_scolarisation_region_key UNIQUE (region);
 �   ALTER TABLE ONLY public.modele_repartition_du_taux_brute_de_scolarisation DROP CONSTRAINT modele_repartition_du_taux_brute_de_scolarisation_region_key;
       public            postgres    false    226                       2606    17186 J   modele_taux_brute_de_scolarisation modele_taux_brute_de_scolarisation_pkey 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_taux_brute_de_scolarisation
    ADD CONSTRAINT modele_taux_brute_de_scolarisation_pkey PRIMARY KEY (id);
 t   ALTER TABLE ONLY public.modele_taux_brute_de_scolarisation DROP CONSTRAINT modele_taux_brute_de_scolarisation_pkey;
       public            postgres    false    228                       2606    17188 P   modele_taux_brute_de_scolarisation modele_taux_brute_de_scolarisation_region_key 
   CONSTRAINT     �   ALTER TABLE ONLY public.modele_taux_brute_de_scolarisation
    ADD CONSTRAINT modele_taux_brute_de_scolarisation_region_key UNIQUE (region);
 z   ALTER TABLE ONLY public.modele_taux_brute_de_scolarisation DROP CONSTRAINT modele_taux_brute_de_scolarisation_region_key;
       public            postgres    false    228            �
           1259    17075    auth_group_name_a6ea08ec_like    INDEX     h   CREATE INDEX auth_group_name_a6ea08ec_like ON public.auth_group USING btree (name varchar_pattern_ops);
 1   DROP INDEX public.auth_group_name_a6ea08ec_like;
       public            postgres    false    209            �
           1259    17012 (   auth_group_permissions_group_id_b120cbf9    INDEX     o   CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON public.auth_group_permissions USING btree (group_id);
 <   DROP INDEX public.auth_group_permissions_group_id_b120cbf9;
       public            postgres    false    211            �
           1259    17013 -   auth_group_permissions_permission_id_84c5c92e    INDEX     y   CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON public.auth_group_permissions USING btree (permission_id);
 A   DROP INDEX public.auth_group_permissions_permission_id_84c5c92e;
       public            postgres    false    211            �
           1259    16998 (   auth_permission_content_type_id_2f476e4b    INDEX     o   CREATE INDEX auth_permission_content_type_id_2f476e4b ON public.auth_permission USING btree (content_type_id);
 <   DROP INDEX public.auth_permission_content_type_id_2f476e4b;
       public            postgres    false    207            �
           1259    17028 "   auth_user_groups_group_id_97559544    INDEX     c   CREATE INDEX auth_user_groups_group_id_97559544 ON public.auth_user_groups USING btree (group_id);
 6   DROP INDEX public.auth_user_groups_group_id_97559544;
       public            postgres    false    215            �
           1259    17027 !   auth_user_groups_user_id_6a12ed8b    INDEX     a   CREATE INDEX auth_user_groups_user_id_6a12ed8b ON public.auth_user_groups USING btree (user_id);
 5   DROP INDEX public.auth_user_groups_user_id_6a12ed8b;
       public            postgres    false    215            �
           1259    17042 1   auth_user_user_permissions_permission_id_1fbb5f2c    INDEX     �   CREATE INDEX auth_user_user_permissions_permission_id_1fbb5f2c ON public.auth_user_user_permissions USING btree (permission_id);
 E   DROP INDEX public.auth_user_user_permissions_permission_id_1fbb5f2c;
       public            postgres    false    217                       1259    17041 +   auth_user_user_permissions_user_id_a95ead1b    INDEX     u   CREATE INDEX auth_user_user_permissions_user_id_a95ead1b ON public.auth_user_user_permissions USING btree (user_id);
 ?   DROP INDEX public.auth_user_user_permissions_user_id_a95ead1b;
       public            postgres    false    217            �
           1259    17069     auth_user_username_6821ab7c_like    INDEX     n   CREATE INDEX auth_user_username_6821ab7c_like ON public.auth_user USING btree (username varchar_pattern_ops);
 4   DROP INDEX public.auth_user_username_6821ab7c_like;
       public            postgres    false    213                       1259    17065 )   django_admin_log_content_type_id_c4bce8eb    INDEX     q   CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON public.django_admin_log USING btree (content_type_id);
 =   DROP INDEX public.django_admin_log_content_type_id_c4bce8eb;
       public            postgres    false    219                       1259    17066 !   django_admin_log_user_id_c564eba6    INDEX     a   CREATE INDEX django_admin_log_user_id_c564eba6 ON public.django_admin_log USING btree (user_id);
 5   DROP INDEX public.django_admin_log_user_id_c564eba6;
       public            postgres    false    219                       1259    17129 #   django_session_expire_date_a5c62663    INDEX     e   CREATE INDEX django_session_expire_date_a5c62663 ON public.django_session USING btree (expire_date);
 7   DROP INDEX public.django_session_expire_date_a5c62663;
       public            postgres    false    220                       1259    17128 (   django_session_session_key_c0390e0f_like    INDEX     ~   CREATE INDEX django_session_session_key_c0390e0f_like ON public.django_session USING btree (session_key varchar_pattern_ops);
 <   DROP INDEX public.django_session_session_key_c0390e0f_like;
       public            postgres    false    220                       1259    17189 -   modele_demande_potentiel_region_ce33fc71_like    INDEX     �   CREATE INDEX modele_demande_potentiel_region_ce33fc71_like ON public.modele_demande_potentielle_en_2018_par_region USING btree (region varchar_pattern_ops);
 A   DROP INDEX public.modele_demande_potentiel_region_ce33fc71_like;
       public            postgres    false    222                       1259    17190 3   modele_population_scolarisable_region_5ac1809a_like    INDEX     �   CREATE INDEX modele_population_scolarisable_region_5ac1809a_like ON public.modele_population_scolarisable USING btree (region varchar_pattern_ops);
 G   DROP INDEX public.modele_population_scolarisable_region_5ac1809a_like;
       public            postgres    false    224                       1259    17191 -   modele_repartition_du_ta_region_1f81cc80_like    INDEX     �   CREATE INDEX modele_repartition_du_ta_region_1f81cc80_like ON public.modele_repartition_du_taux_brute_de_scolarisation USING btree (region varchar_pattern_ops);
 A   DROP INDEX public.modele_repartition_du_ta_region_1f81cc80_like;
       public            postgres    false    226                       1259    17192 7   modele_taux_brute_de_scolarisation_region_1f36de79_like    INDEX     �   CREATE INDEX modele_taux_brute_de_scolarisation_region_1f36de79_like ON public.modele_taux_brute_de_scolarisation USING btree (region varchar_pattern_ops);
 K   DROP INDEX public.modele_taux_brute_de_scolarisation_region_1f36de79_like;
       public            postgres    false    228            "           2606    17007 O   auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 y   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm;
       public          postgres    false    211    207    2791            !           2606    17002 P   auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 z   ALTER TABLE ONLY public.auth_group_permissions DROP CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id;
       public          postgres    false    209    2796    211                        2606    16993 E   auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 o   ALTER TABLE ONLY public.auth_permission DROP CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co;
       public          postgres    false    205    2786    207            $           2606    17022 D   auth_user_groups auth_user_groups_group_id_97559544_fk_auth_group_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES public.auth_group(id) DEFERRABLE INITIALLY DEFERRED;
 n   ALTER TABLE ONLY public.auth_user_groups DROP CONSTRAINT auth_user_groups_group_id_97559544_fk_auth_group_id;
       public          postgres    false    2796    209    215            #           2606    17017 B   auth_user_groups auth_user_groups_user_id_6a12ed8b_fk_auth_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_user_groups
    ADD CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;
 l   ALTER TABLE ONLY public.auth_user_groups DROP CONSTRAINT auth_user_groups_user_id_6a12ed8b_fk_auth_user_id;
       public          postgres    false    213    215    2804            &           2606    17036 S   auth_user_user_permissions auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES public.auth_permission(id) DEFERRABLE INITIALLY DEFERRED;
 }   ALTER TABLE ONLY public.auth_user_user_permissions DROP CONSTRAINT auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm;
       public          postgres    false    207    217    2791            %           2606    17031 V   auth_user_user_permissions auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.auth_user_user_permissions
    ADD CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;
 �   ALTER TABLE ONLY public.auth_user_user_permissions DROP CONSTRAINT auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id;
       public          postgres    false    2804    213    217            '           2606    17055 G   django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES public.django_content_type(id) DEFERRABLE INITIALLY DEFERRED;
 q   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co;
       public          postgres    false    2786    219    205            (           2606    17060 B   django_admin_log django_admin_log_user_id_c564eba6_fk_auth_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id FOREIGN KEY (user_id) REFERENCES public.auth_user(id) DEFERRABLE INITIALLY DEFERRED;
 l   ALTER TABLE ONLY public.django_admin_log DROP CONSTRAINT django_admin_log_user_id_c564eba6_fk_auth_user_id;
       public          postgres    false    2804    213    219            �      x������ � �      �      x������ � �      �   �  x���Mn�0���)8A~��u�Q�r"@�����Ǒ�`�˛��%���tQD<uS��������JNq�:m���j�	V�`����[7%�/`��5R�Q@Á��[#�?��0�{�����k=LU�hkm�^�k	ھ�*/��m	2vK�ʝ�V!�Tr�ն���p[�00�4T������f������"E���@�'nڡJ��b1��P1��H�č�P)�ʑB�:��p��	
e|a-2?(w�n���ޠ���C�R�ձ�-�)�K�џ�_e�s38F[w����LNn�Æ���~���F��A&^�{�0��ك� a0Z�y�@���i�N\�I|����:�F��uBl�Zv)5�`D�̏2���V���4 ��[��`Z��v�ݺG���+���@ܰ�4��w��`j��{��S�.���z�;�=رN	<wL�2��=��ӕ�N=�Å�ؙgv�0_R�@�A�      �      x������ � �      �      x������ � �      �      x������ � �      �      x������ � �      �   �   x�}�I
�0E��aJ�N�]
Ej��dCs�:	.]u�/���^�hȑ2�u0�)f
ْs�p���fdZl04>�T�ε�2G�ي���LU�v'L���'.��n�*�.��]�6���R�nJ��R��[����cI0�1<���W^�o��SB�.���	 >��f*      �   �  x����n� F�����U��ɳ��P̺H�x1���_�����n�;g �q�n��6�� 4~���� ���/d��ϠP��D:����	R#X�����Ƙ��	�G�	q(���In�oΔ���}���m~g�;�䌽f'�7��\_���,ue�/��g5ۄ�3f��;F)��V���cCv��.�~YjI5oF�n���������Ԏ�j]��F��3� �E�w
{�ԡ��|�GP �*ag�GF�K��}9���.��$#�Q��[}��6�J;�Ads���)�R�l��1-��.������4^h��A��ԡ�'�%�I#����8��kBxC�OR\�a�$��K;�:E��)��n�EJ)�W�ⶕO޷8��
?N��1�.��C���<�\��s>�N�b9Oq      �      x������ � �      �   \  x�%�An1E�_w�@$EI�ݸ]%���I�A���ܩ9�/��x5����I�0���=r�'�����'�ün���ĳF����Ad���s\��;Z�f��Қ�N�
v���</���rxtS��2Er&��`�d^ce"���1Q��~���aݾ��nD��I1ijح�����Q����p���95'@��U���e|��8�e��۝O2Ǽ\~�d�Dw�EtZ��KZ�#!�����tJ-FQ�x�c�n���v4����=��=���|���r�ʽ0	�N��5��ۼ����*�� �V�'6�f�~�Nk�j��*_��,��rN����Ns�      �   �  x����n1D�ῄ�rwIno�QT�U���e�`��u@�G�w�ǲ��H��w ����ᮿ�3HZ.��L�fj��"�2�e=?�h��в$֔' �90��eڽA�����UI�b�F�My9O������%�JcA\Q�Z��Gi�����X�6��
6׏�e=,�[����R�)(R��,��w\+����2�%#���>�S���0U�7��!ö_�	,�v8�1J��7!q7��Ч��ŇM��,��m*	fB�=�G�"<��W�%�Țp��QU�8�@����w�:�Y ����j ���t��k%WG�R��2�!���N��u9{�%y��f�����׵@:��׏C?������A�M�Y���v����L��e*���P�C�zO<��4O���oMc�Q5O��'��{!� ��4      �   2  x�5P9n1����W��H㤲� �|^����O�;���BSh8I�*�2CN8 Y�N��F3���e�G�Y>c�Qh獃���+�A�2a�1Id<���4��.#C��ܭ]6A�6s�9���%��DX������D�$"u&'V3�u� �Y^�ɖM�Q`��I��%����Y�a@Ҳb�$\��,lJ�o"�wHV��&��^���D��f��Ŭ�֣�:b�� �rە}[&���/9]NsH<l/��s����R���᫞�:�/m"kY��Zcz=�eԢ^�u!�.�|�1��9h�      �   C  x�m�;n�0D��]BhI.)�AǕ]i�?a} �r���Xv�2i(��3|���r-8[B̈A�d)��:�����y��m��F���x+�����:�&�F&o���NS�p��pN�Cdâ�]o`q����Y�`"V��a����Q���ƦlVcw($�>��gIhl&��]L^)���a�q�d�˽��A��(̆lJ�/b�7�"8)P�FB6Bt�
Ĳ	aJ�Pm2�-����y8,�;x�*�H���R�߷�FI��K:a�����8�M�����V���8�NW��^�PKP4��C����uS��_��7��c~ O�q�     