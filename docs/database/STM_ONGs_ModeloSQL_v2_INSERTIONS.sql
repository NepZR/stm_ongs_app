INSERT INTO usertype(type_name)values('P_FISICA');
INSERT INTO usertype(type_name)values('ONG');

INSERT INTO usuario(
    name,
    email,
    reg_number,
    profile_pic,
    profile_cover,
    description_text,
    passwrd,
    user_type
)values(
    'Octacilio C. de Almeida',
    'octa.oca44@gmail.com',
    '02464534577',
    'https://i.ibb.co/Jk3GHd7/git.jpg',
    'https://i.ibb.co/rdHkzDp/kh.png',
    'Estudante de Ciêcia da Computação',
    crypt('octa442','secret-hash'),
    1
);

INSERT INTO usuario(
    name,
    email,
    reg_number,
    profile_pic,
    profile_cover,
    description_text,
    passwrd,
    user_type
)values(
    'Ong União Animal',
    'uniao@gmail.com',
    '40106854000171',
    'https://i.ibb.co/RcPq2XT/uniao-profile.png',
    'https://i.ibb.co/smwcFhg/uniao-cover.png',
    'Ong Uniao animal de dedica a resgatar e cuidar de animais que estão em situação de rua no município de Santarém.',
    crypt('uniao','secret-hash'),
    2
);
