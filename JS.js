
    var video;
    var vplaylist;
    var vtracks;
    var vcurrent;initvideo();
    function initvideo(){vcurrent=0;
        video=$('video');
        vplaylist=$('#vplaylist');
        vtracks=vplaylist.find('li a');
        vlen=vtracks.length-1;
        video[0].volume=1;
        vplaylist.find('a').click(function(e){e.preventDefault();
            link=$(this);
            vcurrent=link.parent().index();
            runvideo(link,video[0])});
            video[0].addEventListener('ended',function(e){vcurrent++;
                if(vcurrent>vlen){vcurrent=0;
                    link=vplaylist.find('a')[0]}
                    else{link=vplaylist.find('a')[vcurrent]}runvideo($(link),video[0])
                })}function runvideo(link,player){player.src=link.attr('href');
                    par=link.parent();
                    par.addClass('active').siblings().removeClass('active');
                    video[0].load();
                    video[0].play()}
    

    