const caps = [
    {
        id: '38',
        nome: 'Mary e Max - Uma Amizade Diferente',
        imagem: 'https://i.ibb.co/tLzDPth/Mary-e-Max-Uma-Amizade-Diferente.jpg',
        link: 'https://drive.google.com/file/d/1S0-eL0OVku6fUWAKqbVnQy_U9R7rxhhw/preview',
        hash: 'L29%xDIt00~W0M~W004oI900kWRk',
        Genero: 'Comédia/Drama'
    },
    {
        id: '37',
        nome: 'Vem Dançar',
        imagem: 'https://i.ibb.co/TrCpRh4/Vem-Dan-ar.jpg',
        link: 'https://drive.google.com/file/d/1vHZqCNkVCT1U1WkT6V4lmOWW3XJfb5SD/preview',
        hash: 'L4B{igTf00QRKb%3idIT4VIT.T.8',
        Genero: 'Dança/Musical'
    },
    {
        id: '36',
        nome: 'Children of the Sea',
        imagem: 'https://i.ibb.co/94rBmGX/Children-of-the-Sea.jpg',
        link: 'https://drive.google.com/file/d/1d0QlBs635u80ZtKYGPxZcA65nxAGaI1p/preview',
        hash: 'L999p3i{00o}yZfQDho#]_o}ETRP',
        Genero: 'Fantasia/Aventura'
    },
    {
        id: '35',
        nome: 'As Virgens Suicidas',
        imagem: 'https://i.ibb.co/XyB3nyw/As-Virgens-Suicidas.jpg',
        link: 'https://drive.google.com/file/d/1XF6mOBRjHu4LhNy6tlENvgM3CbGkvk7h/preview',
        hash: 'LbNSD}I;IVWV?^smoLaylUn%slf6',
        Genero: 'Romance/Thriller'
    },
    {
        id: '34',
        nome: 'Pulp Fiction: Tempo de Violência',
        imagem: 'https://i.ibb.co/zb1SxbP/Pulp-Fiction-Tempo-de-Viol-ncia.jpg',
        link: 'https://drive.google.com/file/d/1rgbDxcNlDBNPs3enUkNkUHoWgo_quJJj/preview',
        hash: 'LZHdTmnhI@NG?9t6r?j?~6WCjbxZ',
        Genero: 'Crime/Thriller'
    },
    {
        id: '33',
        nome: 'À Espera de um Milagre',
        imagem: 'https://i.ibb.co/C2CpzqG/Espera-de-um-Milagre.jpg',
        link: 'https://drive.google.com/file/d/1e_GaI9rEbzaEYxJMLLR7YulP80OVbhKA/preview',
        hash: 'L7D9q+8w01W?029H?a?a00_N#RIT',
        Genero: 'Crime/Fantasia'
    },
    {
        id: '32',
        nome: '(500) Dias com Ela',
        imagem: 'https://i.ibb.co/nmg3Npn/500-Dias-com-Ela.jpg',
        link: 'https://drive.google.com/file/d/1jSxAdKuqLBXn5mYTkYA4_SJI8AwKADz9/preview',
        hash: 'LJK_OXRPK-bwEVjFF~bc00jEEmR-',
        Genero: 'Comédia/Romance'
    },
    {
        id: '31',
        nome: 'Eduardo e Mônica',
        imagem: 'https://i.ibb.co/0mG8Ycq/Eduardo-e-M-nica.jpg',
        link: 'https://drive.google.com/file/d/1NAnDf8l5nHbLGqfO6Tdyx1dCHTOnx922/preview',
        hash: 'LQPg[R~Kv$bJ.ir;aLof?EZ*S#kB',
        Genero: 'Romance/Comédia'
    },
    {
        id: '30',
        nome: 'Clube da Luta',
        imagem: 'https://i.ibb.co/YB38nKs/Clube-da-Luta.jpg',
        link: 'https://drive.google.com/file/d/1VAf17ekKHFLVZRCfr4SU8ev49Oq6BKZx/preview',
        hash: 'LQLN0}ozE_IUy;ay-CRjt7$k$+kp',
        Genero: 'Ação/Crime'
    },
    {
        id: '29',
        nome: 'O Homem do Futuro',
        imagem: 'https://i.ibb.co/HnsD5bd/O-Homem-do-Futuro.jpg',
        link: 'https://drive.google.com/file/d/18WHDqNaWyQSoh7OuTyxDCXdHifxejdAe/preview',
        hash: 'LfNv-~%g?vxa~qRPW;W;V]Rjn#M{',
        Genero: 'Comédia/Ficção científica'
    },
    {
        id: '28',
        nome: 'Perfect Blue',
        imagem: 'https://i.ibb.co/5nwCSBc/Perfect-Blue.jpg',
        link: 'https://drive.google.com/file/d/10xyhvcQ-o5sFJrXCnkRsUBKCQ1euX2Dl/preview',
        hash: 'L55F95-@RiMvbzxwj;MvV:M^MwRh',
        Genero: 'Terror/Mistério'
    },
    {
        id: '27',
        nome: 'O Show de Truman - O Show da Vida',
        imagem: 'https://i.ibb.co/QF7SthJ/O-Show-de-Truman-O-Show-da-Vida.jpg',
        link: 'https://drive.google.com/file/d/1CV2lYHAHfqIxCjHVSS7xxeojQpQLkorA/preview',
        hash: 'LUFhn}kqOs%3~XSho}t7o$t8xuWA',
        Genero: 'Comédia/Ficção científica'
    },
    {
        id: '26',
        nome: 'Um Sonho de Liberdade',
        imagem: 'https://i.ibb.co/vXF3dS0/Um-Sonho-de-Liberdade.jpg',
        link: 'https://drive.google.com/file/d/1_gtbft-XIi4blDMWwRhWQ0BnyW5zMOhl/preview',
        hash: 'L9BMcAEL00~C0L-T%39w9YX9^ki^',
        Genero: 'Thriller/Ficção policial'
    },
    {
        id: '25',
        nome: 'O Poderoso Chefão',
        imagem: 'https://i.ibb.co/X4fk4cd/O-Poderoso-Chef-o.jpg',
        link: 'https://drive.google.com/file/d/1VGnoFH5mQd2gdSi7pgYrE6LaJzOSxjq5/preview',
        hash: 'LuNJq88^E2NK~Ws+V?WBD%-;oIV@',
        Genero: 'Crime/Ficção policial'
    },
    {
        id: '23',
        nome: 'As Branquelas',
        imagem: 'https://i.ibb.co/XJGyYV8/As-Branquelas.jpg',
        link: 'https://drive.google.com/file/d/16uY2v4eTWyPGLKDZ3kwjN0fEkuaU-4mj/preview',
        hash: 'LrH{ctR+n}n%G^s,oLWB9|WVSPoe',
        Genero: 'Comédia/Crime'
    },
    {
        id: '24',
        nome: 'O Auto da Compadecida',
        imagem: 'https://i.ibb.co/pw6Tp1s/O-Auto-da-Compadecida.jpg',
        link: 'https://drive.google.com/file/d/1XU2c2Nt2JHxjtI6w-F2DIt1J3XJghLQz/preview',
        hash: 'L5HBG29i02Nr00b^1RxI01},}]D,',
        Genero: 'Comédia/Aventura'
    },
    {
        id: '1',
        nome: 'FlaminHot - O Sabor que Mudou a História',
        imagem: 'https://i.ibb.co/vYMZCGK/Flamin-Hot-O-Sabor-que-Mudou-a-Hist-ria.jpg',
        link: 'https://drive.google.com/file/d/1Rj8rCw-xmlIpZCmFzF6snMgDaIoY8z_6/preview',
        hash: 'LdOAq[-gm.t7~9S_NGs:0-VtS|W=',
        Genero: 'Comédia/Drama'
    },
    {
        id: '2',
        nome: 'Por água abaixo',
        imagem: 'https://i.ibb.co/njHLhTd/Por-gua-abaixo.png',
        link: 'https://drive.google.com/file/d/1CUq6vAG_zHGMT7M7ZozZ_vkmnCkMJgBn/preview',
        hash: 'LdM@+Zxt_NtRxukCNGM{?bIVMxxu',
        Genero: 'Infantil/Comédia'
    },
    {
        id: '3',
        nome: 'Cegonhas',
        imagem: 'https://i.ibb.co/7t3GwxG/Cegonhas.png',
        link: 'https://drive.google.com/file/d/1Xv0CxClzMjdLYbOPllmhclvMk_WFM0Qq/preview',
        hash: 'LHJ@,=E20?-;19-oVrxtt:of%2bE',
        Genero: 'Infantil/Aventura'
    },
    {
        id: '4',
        nome: 'Diário de uma Paixão',
        imagem: 'https://i.ibb.co/XYzCrC3/Di-rios-de-uma-paix-o.png',
        link: 'https://drive.google.com/file/d/1vuq_Um4XU5RUS2d_XY_hbQ_WOYxoCcS2/preview',
        hash: 'L9H2g5~p1TRN0F9G,.M|-q%MMu-p',
        Genero: 'Romance/Comédia'
    },
    {
        id: '5',
        nome: 'O Gigante de Ferro',
        imagem: 'https://i.ibb.co/zZJbBT5/O-Gigante-de-Ferro.png',
        link: 'https://drive.google.com/file/d/19rEO9GPiFZOnXWoeRd3M1EZUDMZYJYiQ/preview',
        hash: 'LFFYV|0101%L9FE1-=tR~qe-IAg3',
        Genero: 'Infantil/Ficção científica'
    },
    {
        id: '6',
        nome: 'Super Mario Bros',
        imagem: 'https://i.ibb.co/fpWgXV4/Super-Mario-Bros.png',
        link: 'https://drive.google.com/file/d/1AATQtzjNFGdqKNckGv1jVcVyr8w34bqp/preview',
        hash: 'LHJ?H#_OGJ]~9jbMJGW=0wTLvjO@',
        Genero: 'Infantil/Aventura'
    },
    {
        id: '7',
        nome: 'Querido John',
        imagem: 'https://i.ibb.co/z29VhVj/Querido-John.jpg',
        link: 'https://drive.google.com/file/d/1sHlelyI9Ug_ZR1ePszoSCzHA_eRMJBqq/preview',
        hash: 'L-Ju4ING-;s:_Nf6ofayxvxuM{WC',
        Genero: 'Romance/Guerra'
    },
    {
        id: '8',
        nome: 'Interestelar',
        imagem: 'https://i.ibb.co/qB2scjC/interetelar.jpg',
        link: 'https://drive.google.com/file/d/1l_DuIYvitkEYT6as91IAF02ArG2WNs15/preview',
        hash: 'LEKoG#.8_N9F.7%Mt7t800%L8_t7',
        Genero: 'científica/Aventura'
    },
    {
        id: '9',
        nome: 'La La Land: Cantando Estações',
        imagem: 'https://i.ibb.co/xznd3gj/La-La-Land-Cantando-Esta-es.jpg',
        link: 'https://drive.google.com/file/d/1wedfI9JvH5tvRaKn6WDT6FhfsCImhy6X/preview',
        hash: 'L7C=x,##9H^-AgW@9}of00p1NE9Y',
        Genero: 'Musical/Romance'
    },
    {
        id: '10',
        nome: 'Clube dos Cinco',
        imagem: 'https://i.ibb.co/Zf755Gx/Clube-dos-Cinco.jpg',
        link: 'https://drive.google.com/file/d/18QhvIFz7woO2FW5aPjeZ8ikTT5ff11sa/preview',
        hash: 'L?Mjm.M|x]xu~qs:s:WVs.W;M{ae',
        Genero: 'Comédia/Drama'
    },
    {
        id: '11',
        nome: 'Coco antes de Chanel',
        imagem: 'https://i.ibb.co/VN20bhY/Coco-antes-de-Chanel.jpg',
        link: 'https://drive.google.com/file/d/1P_w1NZV-6HNklF9yu3usbMzv8KjXF02g/preview',
        hash: 'LDFFc|0001M}8{%ME2?Z00?a~pRO',
        Genero: 'Drama/História'
    },
    {
        id: '12',
        nome: 'Bob Marley: One Love',
        imagem: 'https://i.ibb.co/71yZ37Q/Bob-Marley-One-Love.jpg',
        link: 'https://drive.google.com/file/d/1DkCe8enJmpX5LG4gcfjoj6yJT3-B_tvz/preview',
        hash: 'LPCYpl59M}~9?EIWWV%KX8n%t6R,',
        Genero: 'Musical/Drama'
    },
    {
        id: '13',
        nome: 'O Túmulo dos Vagalumes',
        imagem: 'https://i.ibb.co/3C4f1tf/O-T-mulo-dos-Vagalumes.jpg',
        link: 'https://drive.google.com/file/d/1fbdPa-GhmWcDob8YHi7-tPt0N3p2ElSX/preview',
        hash: 'L4EelP0100OH00~W.99F02Mw_3~p',
        Genero: 'Guerra/Drama'
    },
    {
        id: '14',
        nome: 'O Grande Gatsby',
        imagem: 'https://i.ibb.co/WzJVSdM/O-Grande-Gatsby.jpg',
        link: 'https://drive.google.com/file/d/1GG9s3ebhKFOykCWbMZOidWr2v8ts-UgU/preview',
        hash: 'L19@3F~B000N:N-ouO4:4T%1TzEM',
        Genero: 'Romance/Drama'
    },
    {
        id: '15',
        nome: 'Blade Runner 2049',
        imagem: 'https://i.ibb.co/84FnKHZ/Blade-Runner-2049.jpg',
        link: 'https://drive.google.com/file/d/15S_eAZXHMRXx5MwR8ZHVq47VvVEePnbO/preview',
        hash: 'LUEd^,{0xb$fyD+H,@bFxFShI;Nb',
        Genero: 'Ficção científica/Ação'
    },
    {
        id: '16',
        nome: 'Coraline',
        imagem: 'https://i.ibb.co/wJbcWCt/Coraline-e-o-Mundo-Secreto.jpg',
        link: 'https://drive.google.com/file/d/18-FOdLZ6f5KApSO5ng0e15gFDvrYDvW9/preview',
        hash: 'LKDThu8w.mD+Bqm*S$s=IT%LIo%2',
        Genero: 'Infantil/Terror'
    },
    {
        id: '17',
        nome: 'Jogos vorazes',
        imagem: 'https://i.ibb.co/hZy7wd3/Jogos-Vorazes.jpg',
        link: 'https://drive.google.com/file/d/1_jCcnmGZb1TWBbq4NPQzFCMgMFNP9cYz/preview',
        hash: 'LSFh6J?aRkRj~B%MxFWAXSX9jZjY',
        Genero: 'Ação/Aventura'
    },
    {
        id: '18',
        nome: 'Perdido em Marte',
        imagem: 'https://i.ibb.co/rvVXGtr/Perdido-em-Marte.jpg',
        link: 'https://drive.google.com/file/d/1aEK3y_z16BM8H5cyihyqKa0t-DbrUHBL/preview',
        hash: 'LDEVWu4:9u%2~VM{SOxtEMj@?aWC',
        Genero: 'Ficção científica/Aventura'
    },
    {
        id: '19',
        nome: 'Brilho Eterno de uma Mente sem Lembranças',
        imagem: 'https://i.ibb.co/G7cbJMR/Brilho-Eterno-de-uma-Mente-sem-Lembran-as.jpg',
        link: 'https://drive.google.com/file/d/1dySm7ybfGNdcXeUWRjR-EAOyPGt3rIdI/preview',
        hash: 'LuIrBP%MM{Rk_4o~RjoJn#xuWBWB',
        Genero: 'Romance/Ficção científica'
    },
    {
        id: '20',
        nome: 'Alerta Vermelho',
        imagem: 'https://i.ibb.co/Nm99hmQ/alerta-vermelho.jpg',
        link: 'https://drive.google.com/file/d/1gqMFXhkfOR7rRJS0AGUAQS2CZpp14CD5/preview',
        hash: 'LBG7xl00Lg0L00~W:k^k00-prX$j',
        Genero: 'Ação/Comédia'
    },
    {
        id: '21',
        nome: 'Bons de Bico',
        imagem: 'https://i.ibb.co/Lzh00yr/Bons-de-Bico.jpg',
        link: 'https://drive.google.com/file/d/1JN91DaGm9ktZmNY6FZAFwvFgdG-60fDK/preview',
        hash: 'LUGb-=%MpfM_XSxuRjRj-VozD$kD',
        Genero: 'Infantil/Comédia'
    },
    {
        id: '22',
        nome: 'Megamind vs. the Doom Syndicate',
        imagem: 'https://i.ibb.co/kK5CFMj/Megamind-vs-the-Doom-Syndicate.jpg',
        link: 'https://drive.google.com/file/d/1JsGKdzophr9_fCm3nKYvNKOUhwvXWs96/preview',
        hash: 'LlC*COofI[a#PEj]kCWBnOjbROax',
        Genero: 'Infantil'
    },
]

export default caps;