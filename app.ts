function make_album (artist: string, title: string): {artist: string; title: string}  {
    const dictaionaries ={
          artist: artist.charAt(0).toUpperCase()+ artist.slice(1),
          title: title.charAt(0).toUpperCase()+title.slice(1),
    }
       return dictaionaries;
       
  
  }
 let album = make_album("Ali","light")
 console.log(album);

 album = make_album ("Taha","dark")
 console.log(album);

  album = make_album("Minal","red wave")
 console.log(album);
