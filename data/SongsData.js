const SONGS = [
    {
        id: 1,
        title: '19th Floor',
        artist: 'Bobby Richards',
        artwork: 'https://placehold.co/600x400',
        url: 'https://rr5---sn-i3belnlz.googlevideo.com/videoplayback?expire=1699641327&ei=jyNOZdTQENKxs8IP3LqT2Ag&ip=103.234.38.38&id=o-ABh_2nyTBHIsFXpA3Q74d4j4ojT18IJvPS0qac4PfKZF&itag=140&source=youtube&requiressl=yes&spc=UWF9f7hQAjeLOaSpUrcqXXiOpg1x5VbWcjgW7HJjfw&vprv=1&svpuc=1&mime=audio/mp4&ns=RSSw3UKrSfOo16FCMoKDDAEP&gir=yes&clen=2211843&dur=136.626&lmt=1617898877388644&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=WEB&txp=6311222&n=dqP2f-2ytg-gw5CL&sparams=expire,ei,ip,id,itag,source,requiressl,spc,vprv,svpuc,mime,ns,gir,clen,dur,lmt&sig=ANLwegAwRQIgZEwXLup0WGGKt8B-c73xmIEt2oeCOlrit-J9WUOGgmQCIQD1v8eNLkYZ2G78HlJf7OQ6iMLp_md02HgZglaYVq-XOA==&cm2rm=sn-42u-i5oee76&req_id=408bde799bf2a3ee&redirect_counter=2&rm=sn-i3bdl7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-j&mip=1.55.87.120&mm=30&mn=sn-i3belnlz&ms=nxu&mt=1699619313&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgVEFPn0z3nmTKAa7XR5rSAwpLrpCStHe1UYRqBkEsVfECIQCZRoE2Azr1L1WSkowNhVz1NmWHPVMpCOOjeV__nItmdg%3D%3D',
    },
    {
        id: 2,
        title: 'Awful',
        artist: 'josh pan',
        artwork: 'https://placehold.co/600x400',
        url: 'https://rr5---sn-i3belnlz.googlevideo.com/videoplayback?expire=1699641327&ei=jyNOZdTQENKxs8IP3LqT2Ag&ip=103.234.38.38&id=o-ABh_2nyTBHIsFXpA3Q74d4j4ojT18IJvPS0qac4PfKZF&itag=140&source=youtube&requiressl=yes&spc=UWF9f7hQAjeLOaSpUrcqXXiOpg1x5VbWcjgW7HJjfw&vprv=1&svpuc=1&mime=audio/mp4&ns=RSSw3UKrSfOo16FCMoKDDAEP&gir=yes&clen=2211843&dur=136.626&lmt=1617898877388644&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=WEB&txp=6311222&n=dqP2f-2ytg-gw5CL&sparams=expire,ei,ip,id,itag,source,requiressl,spc,vprv,svpuc,mime,ns,gir,clen,dur,lmt&sig=ANLwegAwRQIgZEwXLup0WGGKt8B-c73xmIEt2oeCOlrit-J9WUOGgmQCIQD1v8eNLkYZ2G78HlJf7OQ6iMLp_md02HgZglaYVq-XOA==&cm2rm=sn-42u-i5oee76&req_id=408bde799bf2a3ee&redirect_counter=2&rm=sn-i3bdl7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-j&mip=1.55.87.120&mm=30&mn=sn-i3belnlz&ms=nxu&mt=1699619313&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgVEFPn0z3nmTKAa7XR5rSAwpLrpCStHe1UYRqBkEsVfECIQCZRoE2Azr1L1WSkowNhVz1NmWHPVMpCOOjeV__nItmdg%3D%3D'
    },
    {
        id: 3,
        title: 'Something is Going On',
        artist: 'Godmode',
        artwork: 'https://placehold.co/600x400',
        url: 'https://rr5---sn-i3belnlz.googlevideo.com/videoplayback?expire=1699641327&ei=jyNOZdTQENKxs8IP3LqT2Ag&ip=103.234.38.38&id=o-ABh_2nyTBHIsFXpA3Q74d4j4ojT18IJvPS0qac4PfKZF&itag=140&source=youtube&requiressl=yes&spc=UWF9f7hQAjeLOaSpUrcqXXiOpg1x5VbWcjgW7HJjfw&vprv=1&svpuc=1&mime=audio/mp4&ns=RSSw3UKrSfOo16FCMoKDDAEP&gir=yes&clen=2211843&dur=136.626&lmt=1617898877388644&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=WEB&txp=6311222&n=dqP2f-2ytg-gw5CL&sparams=expire,ei,ip,id,itag,source,requiressl,spc,vprv,svpuc,mime,ns,gir,clen,dur,lmt&sig=ANLwegAwRQIgZEwXLup0WGGKt8B-c73xmIEt2oeCOlrit-J9WUOGgmQCIQD1v8eNLkYZ2G78HlJf7OQ6iMLp_md02HgZglaYVq-XOA==&cm2rm=sn-42u-i5oee76&req_id=408bde799bf2a3ee&redirect_counter=2&rm=sn-i3bdl7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-j&mip=1.55.87.120&mm=30&mn=sn-i3belnlz&ms=nxu&mt=1699619313&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgVEFPn0z3nmTKAa7XR5rSAwpLrpCStHe1UYRqBkEsVfECIQCZRoE2Azr1L1WSkowNhVz1NmWHPVMpCOOjeV__nItmdg%3D%3D'
    },
    {
        id: 4,
        title: 'Book The Rental Wit It',
        artist: 'RAGE',
        artwork: 'https://placehold.co/600x400',
        url: 'https://rr5---sn-i3belnlz.googlevideo.com/videoplayback?expire=1699641327&ei=jyNOZdTQENKxs8IP3LqT2Ag&ip=103.234.38.38&id=o-ABh_2nyTBHIsFXpA3Q74d4j4ojT18IJvPS0qac4PfKZF&itag=140&source=youtube&requiressl=yes&spc=UWF9f7hQAjeLOaSpUrcqXXiOpg1x5VbWcjgW7HJjfw&vprv=1&svpuc=1&mime=audio/mp4&ns=RSSw3UKrSfOo16FCMoKDDAEP&gir=yes&clen=2211843&dur=136.626&lmt=1617898877388644&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=WEB&txp=6311222&n=dqP2f-2ytg-gw5CL&sparams=expire,ei,ip,id,itag,source,requiressl,spc,vprv,svpuc,mime,ns,gir,clen,dur,lmt&sig=ANLwegAwRQIgZEwXLup0WGGKt8B-c73xmIEt2oeCOlrit-J9WUOGgmQCIQD1v8eNLkYZ2G78HlJf7OQ6iMLp_md02HgZglaYVq-XOA==&cm2rm=sn-42u-i5oee76&req_id=408bde799bf2a3ee&redirect_counter=2&rm=sn-i3bdl7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-j&mip=1.55.87.120&mm=30&mn=sn-i3belnlz&ms=nxu&mt=1699619313&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgVEFPn0z3nmTKAa7XR5rSAwpLrpCStHe1UYRqBkEsVfECIQCZRoE2Azr1L1WSkowNhVz1NmWHPVMpCOOjeV__nItmdg%3D%3D'
    },
    {
        id: 5,
        title: 'Crimson Fly',
        artist: 'Huma-Huma',
        url: 'https://placehold.co/600x400',
        url: 'https://rr5---sn-i3belnlz.googlevideo.com/videoplayback?expire=1699641327&ei=jyNOZdTQENKxs8IP3LqT2Ag&ip=103.234.38.38&id=o-ABh_2nyTBHIsFXpA3Q74d4j4ojT18IJvPS0qac4PfKZF&itag=140&source=youtube&requiressl=yes&spc=UWF9f7hQAjeLOaSpUrcqXXiOpg1x5VbWcjgW7HJjfw&vprv=1&svpuc=1&mime=audio/mp4&ns=RSSw3UKrSfOo16FCMoKDDAEP&gir=yes&clen=2211843&dur=136.626&lmt=1617898877388644&keepalive=yes&fexp=24007246,24350018&beids=24350018&c=WEB&txp=6311222&n=dqP2f-2ytg-gw5CL&sparams=expire,ei,ip,id,itag,source,requiressl,spc,vprv,svpuc,mime,ns,gir,clen,dur,lmt&sig=ANLwegAwRQIgZEwXLup0WGGKt8B-c73xmIEt2oeCOlrit-J9WUOGgmQCIQD1v8eNLkYZ2G78HlJf7OQ6iMLp_md02HgZglaYVq-XOA==&cm2rm=sn-42u-i5oee76&req_id=408bde799bf2a3ee&redirect_counter=2&rm=sn-i3bdl7s&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=-j&mip=1.55.87.120&mm=30&mn=sn-i3belnlz&ms=nxu&mt=1699619313&mv=m&mvi=5&pl=24&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgVEFPn0z3nmTKAa7XR5rSAwpLrpCStHe1UYRqBkEsVfECIQCZRoE2Azr1L1WSkowNhVz1NmWHPVMpCOOjeV__nItmdg%3D%3D'
    },
];

export default SONGS;