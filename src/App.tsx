import React, {useEffect, useRef, useState} from 'react'
import styles from "./App.module.css"
import Header from "./Header.tsx";
import Projects from "./Projects.tsx";


function App() {
  const viewportPos = (window.innerHeight/100)*40;
  const projectsRef = useRef<HTMLHeadingElement>(null);
  const [divPos, setDivPos] = useState(-300);

  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  })

  function handleScroll(event: React.WheelEvent) {
    if (!projectsRef.current) return;
    const bounds = projectsRef.current!.getBoundingClientRect();
    //console.log(bounds.top)
    if (Math.floor(viewportPos) === Math.floor(bounds.top)) {
      if (event.deltaX > 0) {
        setDivPos(divPos-40);
      } else setDivPos(divPos+40);

    }

  }

  return (
    <div className={styles.app}>
      <Header />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper ipsum feugiat velit ornare feugiat. In placerat lacus eu libero ornare, sed malesuada justo porttitor. Proin commodo erat sed ligula ultricies, ac congue lorem blandit. Vivamus libero quam, aliquet tempor risus sit amet, condimentum vulputate ligula. Nunc posuere, ipsum vel venenatis sollicitudin, enim sapien congue nisi, eget lacinia est magna nec metus. Duis fermentum semper luctus. Sed sem ex, lacinia sed sollicitudin eget, sollicitudin eget nisl. Donec convallis sem nec iaculis venenatis. Maecenas lorem dui, eleifend eu dolor et, pretium dictum eros. Vestibulum tristique gravida purus, non tempus sapien accumsan eget. Donec tristique, odio vel sollicitudin bibendum, neque arcu elementum felis, vel finibus elit magna et tellus. Ut vehicula purus vitae est ultrices venenatis. Aenean at nisl id purus ullamcorper faucibus. Maecenas sit amet diam lorem. Vivamus rhoncus diam sed euismod malesuada.

        Donec dignissim nec urna eget molestie. Donec placerat lacinia urna sit amet luctus. Morbi in sem vulputate, ultricies nisl ac, pharetra massa. Aliquam sed nisl eu sem pellentesque porta eu non lorem. Duis imperdiet, diam quis vulputate rhoncus, felis risus gravida leo, laoreet commodo diam ante ut ante. Mauris imperdiet vestibulum dictum. Vestibulum vehicula sit amet purus nec gravida.

        Nunc ut nulla vitae tortor placerat iaculis. In magna erat, venenatis commodo maximus vitae, aliquam sed erat. Phasellus tincidunt lacus ut porta sodales. Aenean posuere, lacus eu dignissim sodales, neque libero iaculis orci, ac vehicula eros odio ut mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rutrum imperdiet turpis non blandit. Etiam volutpat, neque non dignissim ornare, erat massa gravida elit, sit amet fringilla diam erat sed risus. Nulla venenatis metus erat, quis iaculis erat fermentum at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tincidunt rhoncus eleifend.

        Pellentesque et massa quis magna tincidunt congue quis vitae arcu. Fusce hendrerit pellentesque eros vel dictum. Proin ornare ex felis, et hendrerit magna hendrerit nec. Fusce in magna at mi laoreet fermentum id at justo. Sed rutrum est turpis, sit amet lobortis enim rhoncus quis. Integer suscipit porttitor justo, et hendrerit felis mattis vel. Pellentesque a metus ipsum. Donec est diam, rhoncus interdum sem quis, lacinia auctor neque. Integer viverra egestas felis sit amet tristique. Phasellus malesuada velit hendrerit, venenatis eros nec, molestie lacus. Nunc sapien arcu, aliquam et lacus in, sollicitudin posuere magna. Curabitur at metus ornare, commodo leo eget, rhoncus est. Nullam vehicula convallis congue. Praesent elementum sem at est gravida fermentum. Phasellus pellentesque ultricies mattis.

        In sagittis velit elit, sit amet tempus ipsum tempus vel. Phasellus non dui tellus. Aenean lobortis consequat fringilla. Nulla quis arcu magna. Curabitur sagittis sapien non risus suscipit, at mollis quam elementum. Suspendisse potenti. Vestibulum vehicula sapien sed quam bibendum, eu pulvinar mi pellentesque. Sed mattis ac diam lobortis tincidunt.

        Morbi ac varius lacus. Ut elementum placerat maximus. In hac habitasse platea dictumst. Aliquam et arcu ullamcorper, semper sem a, dapibus sapien. Phasellus volutpat elit iaculis tempor tristique. Aliquam rhoncus sodales leo in porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce efficitur leo ac est lacinia pretium. Phasellus luctus libero urna, eu sollicitudin ipsum luctus at. Praesent tristique augue nunc, a pretium eros cursus vel. Praesent lobortis eleifend semper. Praesent sollicitudin aliquam molestie. Praesent interdum pellentesque porttitor.

        Maecenas a tortor pretium ligula interdum facilisis eget vel tortor. Aenean in pellentesque arcu. Fusce vehicula nisl ac tincidunt condimentum. Fusce pellentesque rutrum fermentum. Cras non tempor nulla. Aliquam imperdiet ex sit amet turpis ultricies cursus. Morbi velit nisl, venenatis eleifend mauris in, scelerisque auctor massa. Quisque varius ullamcorper orci, non tincidunt neque mollis nec.

        Aenean suscipit lacus eu tellus vulputate tincidunt. Sed fringilla vitae nunc vel accumsan. Maecenas eleifend interdum enim, finibus auctor diam condimentum a. Fusce mi augue, sagittis nec iaculis in, venenatis sed nibh. Nullam quis tincidunt orci, dignissim iaculis neque. Nunc consequat massa ut tempus lacinia. Nam eget ultrices nisi. Ut ut pharetra ipsum.

        Nullam et metus sem. Aenean pharetra aliquet bibendum. Donec fringilla justo at ornare varius. Vestibulum quis congue nisl. Aliquam hendrerit at augue vitae pretium. Pellentesque vitae risus eu quam fermentum pellentesque id at urna. Cras eleifend arcu lobortis, bibendum nisi at, pretium augue.

        Sed tempus lorem imperdiet nibh pulvinar, ut tincidunt nisl elementum. Curabitur congue nulla a est porttitor pellentesque. Proin ac lectus at dui convallis lobortis. Vivamus viverra erat sed diam porta vulputate. Integer vitae dapibus nunc. Morbi vestibulum dui eu commodo laoreet. Sed nec ligula molestie, congue justo sed, hendrerit dolor. Suspendisse vel maximus nulla. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Donec eu ultricies metus. In interdum magna eget finibus iaculis. Donec ultricies tempus mi, sed ultrices lacus porta eu.

        Morbi pharetra ex vitae augue condimentum, at eleifend eros blandit. Nunc eu augue id risus euismod dictum. Donec ac enim nisi. Quisque dapibus nisl ac lectus varius rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed pretium nunc, nec finibus augue. Duis placerat viverra turpis ac venenatis. Mauris eleifend posuere commodo.

        Fusce vehicula varius fringilla. Phasellus dignissim, nulla eu rutrum porta, mi nibh tempus massa, nec congue lectus neque et mauris. Pellentesque sed varius ante. Cras iaculis convallis lobortis. Sed eget turpis at nunc maximus cursus sed a nibh. Suspendisse eleifend placerat imperdiet. Proin ipsum dui, euismod vel laoreet non, pellentesque nec lectus. Proin lorem dui, tristique ac dapibus nec, dignissim vitae purus. Phasellus ullamcorper pretium dolor, ac pulvinar dolor lacinia vitae. Mauris dictum maximus quam vel tincidunt. Donec volutpat, nisi vitae facilisis scelerisque, nibh arcu ornare est, sit amet condimentum dolor arcu at leo. Pellentesque rutrum consequat libero, id tincidunt lacus varius sit amet. Nulla facilisi. Aenean at libero aliquam, laoreet mauris id, egestas tellus. Morbi convallis libero aliquet odio lobortis, eget tincidunt risus pulvinar.

        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sem urna, dapibus sit amet dapibus quis, condimentum at leo. Donec at luctus nibh, a iaculis leo. Pellentesque vel nibh non dui dignissim vehicula laoreet semper ipsum. Duis volutpat non odio vitae consequat. Proin vulputate purus quis tortor lacinia, et accumsan mi tincidunt. Vivamus euismod arcu in pretium bibendum. Vivamus ultrices tellus nec eros ultrices ultrices. Donec turpis felis, fringilla in nulla laoreet, vehicula ultricies ipsum. Aenean vestibulum porttitor ante, eu fringilla elit lacinia quis. Integer eu feugiat urna. Nulla eget sem est. Sed in interdum lorem, sit amet vulputate neque.
      </p>
      <h1 className={styles.title} ref={projectsRef}>Projects</h1>
      <div style={{ position: "sticky", top: "25vh" }}>
        <div style={{ right: divPos }} className={styles.project}></div>
      </div>

      <Projects />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper ipsum feugiat velit ornare feugiat. In placerat lacus eu libero ornare, sed malesuada justo porttitor. Proin commodo erat sed ligula ultricies, ac congue lorem blandit. Vivamus libero quam, aliquet tempor risus sit amet, condimentum vulputate ligula. Nunc posuere, ipsum vel venenatis sollicitudin, enim sapien congue nisi, eget lacinia est magna nec metus. Duis fermentum semper luctus. Sed sem ex, lacinia sed sollicitudin eget, sollicitudin eget nisl. Donec convallis sem nec iaculis venenatis. Maecenas lorem dui, eleifend eu dolor et, pretium dictum eros. Vestibulum tristique gravida purus, non tempus sapien accumsan eget. Donec tristique, odio vel sollicitudin bibendum, neque arcu elementum felis, vel finibus elit magna et tellus. Ut vehicula purus vitae est ultrices venenatis. Aenean at nisl id purus ullamcorper faucibus. Maecenas sit amet diam lorem. Vivamus rhoncus diam sed euismod malesuada.

        Donec dignissim nec urna eget molestie. Donec placerat lacinia urna sit amet luctus. Morbi in sem vulputate, ultricies nisl ac, pharetra massa. Aliquam sed nisl eu sem pellentesque porta eu non lorem. Duis imperdiet, diam quis vulputate rhoncus, felis risus gravida leo, laoreet commodo diam ante ut ante. Mauris imperdiet vestibulum dictum. Vestibulum vehicula sit amet purus nec gravida.

        Nunc ut nulla vitae tortor placerat iaculis. In magna erat, venenatis commodo maximus vitae, aliquam sed erat. Phasellus tincidunt lacus ut porta sodales. Aenean posuere, lacus eu dignissim sodales, neque libero iaculis orci, ac vehicula eros odio ut mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum rutrum imperdiet turpis non blandit. Etiam volutpat, neque non dignissim ornare, erat massa gravida elit, sit amet fringilla diam erat sed risus. Nulla venenatis metus erat, quis iaculis erat fermentum at. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc tincidunt rhoncus eleifend.

        Pellentesque et massa quis magna tincidunt congue quis vitae arcu. Fusce hendrerit pellentesque eros vel dictum. Proin ornare ex felis, et hendrerit magna hendrerit nec. Fusce in magna at mi laoreet fermentum id at justo. Sed rutrum est turpis, sit amet lobortis enim rhoncus quis. Integer suscipit porttitor justo, et hendrerit felis mattis vel. Pellentesque a metus ipsum. Donec est diam, rhoncus interdum sem quis, lacinia auctor neque. Integer viverra egestas felis sit amet tristique. Phasellus malesuada velit hendrerit, venenatis eros nec, molestie lacus. Nunc sapien arcu, aliquam et lacus in, sollicitudin posuere magna. Curabitur at metus ornare, commodo leo eget, rhoncus est. Nullam vehicula convallis congue. Praesent elementum sem at est gravida fermentum. Phasellus pellentesque ultricies mattis.

        In sagittis velit elit, sit amet tempus ipsum tempus vel. Phasellus non dui tellus. Aenean lobortis consequat fringilla. Nulla quis arcu magna. Curabitur sagittis sapien non risus suscipit, at mollis quam elementum. Suspendisse potenti. Vestibulum vehicula sapien sed quam bibendum, eu pulvinar mi pellentesque. Sed mattis ac diam lobortis tincidunt.

        Morbi ac varius lacus. Ut elementum placerat maximus. In hac habitasse platea dictumst. Aliquam et arcu ullamcorper, semper sem a, dapibus sapien. Phasellus volutpat elit iaculis tempor tristique. Aliquam rhoncus sodales leo in porttitor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce efficitur leo ac est lacinia pretium. Phasellus luctus libero urna, eu sollicitudin ipsum luctus at. Praesent tristique augue nunc, a pretium eros cursus vel. Praesent lobortis eleifend semper. Praesent sollicitudin aliquam molestie. Praesent interdum pellentesque porttitor.

        Maecenas a tortor pretium ligula interdum facilisis eget vel tortor. Aenean in pellentesque arcu. Fusce vehicula nisl ac tincidunt condimentum. Fusce pellentesque rutrum fermentum. Cras non tempor nulla. Aliquam imperdiet ex sit amet turpis ultricies cursus. Morbi velit nisl, venenatis eleifend mauris in, scelerisque auctor massa. Quisque varius ullamcorper orci, non tincidunt neque mollis nec.

        Aenean suscipit lacus eu tellus vulputate tincidunt. Sed fringilla vitae nunc vel accumsan. Maecenas eleifend interdum enim, finibus auctor diam condimentum a. Fusce mi augue, sagittis nec iaculis in, venenatis sed nibh. Nullam quis tincidunt orci, dignissim iaculis neque. Nunc consequat massa ut tempus lacinia. Nam eget ultrices nisi. Ut ut pharetra ipsum.

        Nullam et metus sem. Aenean pharetra aliquet bibendum. Donec fringilla justo at ornare varius. Vestibulum quis congue nisl. Aliquam hendrerit at augue vitae pretium. Pellentesque vitae risus eu quam fermentum pellentesque id at urna. Cras eleifend arcu lobortis, bibendum nisi at, pretium augue.

        Sed tempus lorem imperdiet nibh pulvinar, ut tincidunt nisl elementum. Curabitur congue nulla a est porttitor pellentesque. Proin ac lectus at dui convallis lobortis. Vivamus viverra erat sed diam porta vulputate. Integer vitae dapibus nunc. Morbi vestibulum dui eu commodo laoreet. Sed nec ligula molestie, congue justo sed, hendrerit dolor. Suspendisse vel maximus nulla. In hac habitasse platea dictumst. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla facilisi. Donec eu ultricies metus. In interdum magna eget finibus iaculis. Donec ultricies tempus mi, sed ultrices lacus porta eu.

        Morbi pharetra ex vitae augue condimentum, at eleifend eros blandit. Nunc eu augue id risus euismod dictum. Donec ac enim nisi. Quisque dapibus nisl ac lectus varius rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sed pretium nunc, nec finibus augue. Duis placerat viverra turpis ac venenatis. Mauris eleifend posuere commodo.

        Fusce vehicula varius fringilla. Phasellus dignissim, nulla eu rutrum porta, mi nibh tempus massa, nec congue lectus neque et mauris. Pellentesque sed varius ante. Cras iaculis convallis lobortis. Sed eget turpis at nunc maximus cursus sed a nibh. Suspendisse eleifend placerat imperdiet. Proin ipsum dui, euismod vel laoreet non, pellentesque nec lectus. Proin lorem dui, tristique ac dapibus nec, dignissim vitae purus. Phasellus ullamcorper pretium dolor, ac pulvinar dolor lacinia vitae. Mauris dictum maximus quam vel tincidunt. Donec volutpat, nisi vitae facilisis scelerisque, nibh arcu ornare est, sit amet condimentum dolor arcu at leo. Pellentesque rutrum consequat libero, id tincidunt lacus varius sit amet. Nulla facilisi. Aenean at libero aliquam, laoreet mauris id, egestas tellus. Morbi convallis libero aliquet odio lobortis, eget tincidunt risus pulvinar.

        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus sem urna, dapibus sit amet dapibus quis, condimentum at leo. Donec at luctus nibh, a iaculis leo. Pellentesque vel nibh non dui dignissim vehicula laoreet semper ipsum. Duis volutpat non odio vitae consequat. Proin vulputate purus quis tortor lacinia, et accumsan mi tincidunt. Vivamus euismod arcu in pretium bibendum. Vivamus ultrices tellus nec eros ultrices ultrices. Donec turpis felis, fringilla in nulla laoreet, vehicula ultricies ipsum. Aenean vestibulum porttitor ante, eu fringilla elit lacinia quis. Integer eu feugiat urna. Nulla eget sem est. Sed in interdum lorem, sit amet vulputate neque.

        Aliquam erat volutpat. Donec vel ultricies ipsum, nec fringilla purus. Nam porttitor, lorem ac vulputate ultrices, tortor lorem ornare enim, vel auctor lectus libero vel nunc. Aliquam hendrerit eros eu bibendum efficitur. Aenean finibus fermentum urna, et ullamcorper erat vehicula sed. Mauris a placerat nisl. Sed vulputate tortor non mollis dapibus. Phasellus vitae nulla mi. Fusce fermentum libero vitae massa tempor, eu luctus felis pharetra. Donec purus neque, egestas quis consequat sit amet, porttitor eget tortor. Pellentesque id felis sit amet tellus porta blandit.

        Quisque venenatis, augue sed vulputate sodales, elit tellus tincidunt turpis, vitae pellentesque ex nibh eget nisl. Pellentesque fringilla molestie orci, non vehicula quam pulvinar id. Nullam quis lacus sed libero pulvinar imperdiet at non nulla. Integer dapibus quam orci, id venenatis libero porttitor id. Mauris porta non ex eu condimentum. In id varius erat. Etiam ac lobortis diam. Integer interdum magna id lacinia suscipit. Morbi interdum lectus et est rutrum sodales.

        Nam venenatis lorem nibh, sed porttitor elit interdum at. Sed dui nunc, dignissim et justo accumsan, aliquet blandit nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus volutpat justo nulla, vel accumsan odio laoreet vel. Proin a nunc nec dolor tempor consequat id nec sapien. Integer dignissim leo non quam commodo, in viverra arcu porttitor. Vestibulum vel tortor placerat felis molestie pharetra blandit nec eros. Sed eleifend orci erat, cursus convallis ligula fringilla nec. Curabitur cursus lacinia urna, vel dapibus ante venenatis ac. Ut vel lacus mattis, ultrices felis nec, vestibulum nunc.

        Vivamus mattis rutrum condimentum. Donec nec auctor elit. Donec aliquet magna metus, sit amet viverra ante tempor ut. In id pharetra dolor. Maecenas tincidunt odio nulla, et euismod diam accumsan sed. Nam tristique posuere mi, sit amet eleifend mauris semper sed. Curabitur maximus est non ligula tempor, id ornare eros consequat. Nullam sagittis cursus egestas. Duis eget leo quam. Integer molestie odio sit amet urna laoreet, rutrum maximus orci ultricies. Integer congue sapien est. Suspendisse molestie metus ac nisl maximus, non volutpat odio finibus. Sed hendrerit, enim et dapibus semper, orci diam iaculis ipsum, ut molestie lacus elit et leo. Aenean ac auctor arcu.

        Donec volutpat ligula sed fringilla fermentum. Praesent lobortis ut velit ac convallis. Donec faucibus, est in laoreet blandit, nunc tellus sodales mauris, placerat rutrum nulla lacus eget sem. Vivamus at neque sit amet ligula ultrices egestas at et orci. Morbi vel nibh ut orci suscipit posuere. Proin urna velit, imperdiet vel lobortis imperdiet, placerat vel neque. Nulla et ante quis sapien mollis mattis. Praesent nisl erat, elementum in ante vel, fermentum condimentum urna. Mauris et sollicitudin mauris, sit amet efficitur nisl.

        Nullam egestas neque eu leo commodo ultricies sed ac magna. Curabitur nunc libero, pulvinar a mauris in, fringilla dictum turpis. Nunc nibh neque, pharetra vitae eleifend quis, eleifend vitae enim. Etiam non arcu condimentum, tristique orci quis, cursus ante. Nullam maximus justo risus, in scelerisque felis maximus ut. Donec elementum dignissim felis, vitae condimentum risus aliquet nec. Donec sed quam vel dui laoreet vestibulum. Maecenas mattis libero ornare lorem viverra, eget aliquet diam semper. Proin eu volutpat magna.

        Etiam in pulvinar magna. Phasellus euismod interdum erat, at mattis mauris. Morbi rhoncus tincidunt lacus bibendum sollicitudin. Nullam vel dignissim tortor. Suspendisse potenti. Fusce vel metus a nunc varius laoreet eu quis neque. Phasellus accumsan lacinia sapien, sed fringilla mauris varius in. Nunc nec eleifend justo. Morbi interdum, quam et finibus elementum, leo massa facilisis mauris, quis consequat sem nibh a tellus. Donec porttitor tincidunt ante, vel feugiat dolor pharetra a. In pulvinar sapien vitae maximus iaculis. Cras ultricies quis mauris nec consectetur. Quisque mattis mi sit amet commodo ultrices. Nullam non elit molestie, sodales purus vitae, imperdiet lorem. Etiam imperdiet, tortor ut luctus imperdiet, nibh neque faucibus felis, ac fermentum est mi ut ex.</p>
    </div>
  )
}

export default App
