(this.webpackJsonpspotify=this.webpackJsonpspotify||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s,n=a(1),r=a.n(n),c=a(8),i=a.n(c),o=(a(13),a(3)),l=a(4),h=a(2),u=a(6),p=a(5),d=(a(14),a(0)),m=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={term:""},s.search=s.search.bind(Object(h.a)(s)),s.handleTermChange=s.handleTermChange.bind(Object(h.a)(s)),s.handleKeyPress=s.handleKeyPress.bind(Object(h.a)(s)),s}return Object(l.a)(a,[{key:"search",value:function(){this.props.onSearch(this.state.term)}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleKeyPress",value:function(e){"Enter"===e.key&&this.search()}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchBar",children:[Object(d.jsx)("input",{onChange:this.handleTermChange,onKeyPress:this.handleKeyPress,placeholder:"Enter A Song, Album, or Artist"}),Object(d.jsx)("button",{className:"SearchButton",onClick:this.search,children:"SEARCH"})]})}}]),a}(r.a.Component),j=(a(16),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).addTrack=s.addTrack.bind(Object(h.a)(s)),s.removeTrack=s.removeTrack.bind(Object(h.a)(s)),s}return Object(l.a)(a,[{key:"renderAction",value:function(){return this.props.onRemove?Object(d.jsx)("button",{className:"Track-action",onClick:this.removeTrack,children:" - "}):Object(d.jsx)("button",{className:"Track-action",onClick:this.addTrack,children:" + "})}},{key:"addTrack",value:function(){this.props.onAdd(this.props.track)}},{key:"removeTrack",value:function(){this.props.onRemove(this.props.track)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Track",children:[Object(d.jsxs)("div",{className:"Track-information",children:[Object(d.jsx)("h3",{children:this.props.track.name}),Object(d.jsxs)("p",{children:[this.props.track.artist," | ",this.props.track.album]})]}),this.renderAction()]})}}]),a}(r.a.Component)),b=(a(17),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=this;return this.props.tracks&&(e=this.props.tracks.map((function(e){return Object(d.jsx)(j,{track:e,onAdd:t.props.onAdd,tracks:t.props.tracks,onRemove:t.props.onRemove,isRemoval:t.props.isRemoval},e.id)}))),console.log(this.props.tracks,this.props.isRemoval),Object(d.jsx)("div",{className:"TrackList",children:e})}}]),a}(r.a.Component)),v=(a(18),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"SearchResults",children:[Object(d.jsx)("h2",{children:"Results"}),Object(d.jsx)(b,{tracks:this.props.searchResults,onAdd:this.props.onAdd})]})}}]),a}(r.a.Component)),f=(a(19),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleNameChange=s.handleNameChange.bind(Object(h.a)(s)),s}return Object(l.a)(a,[{key:"handleNameChange",value:function(e){this.props.onNameChange(e.target.value)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Playlist",children:[Object(d.jsx)("input",{defaultValue:this.props.playlistName,onChange:this.handleNameChange}),Object(d.jsx)(b,{tracks:this.props.playlistTracks,onRemove:this.props.onRemove,isRemoval:!0}),Object(d.jsx)("button",{className:"Playlist-save",onClick:this.props.onSave,children:"SAVE TO SPOTIFY"})]})}}]),a}(r.a.Component)),k={getAccessToken:function(){if(s)return s;var e=window.location.href.match(/access_token=([^&]*)/),t=window.location.href.match(/expires_in=([^&]*)/);if(e&&t){s=e[1];var a=Number(t[1]);return window.setTimeout((function(){return s=""}),1e3*a),window.history.pushState("Access Token",null,"/"),s}var n="https://accounts.spotify.com/authorize?client_id=".concat("417c796e8e7040baa5692e3aed49f27d","&response_type=token&scope=playlist-modify-public&redirect_uri=").concat("http://localhost:3000/");window.location=n},search:function(e){var t=k.getAccessToken();return fetch("https://api.spotify.com/v1/search?type=track&q=".concat(e),{headers:{Authorization:"Bearer ".concat(t)}}).then((function(e){if(e.ok)return e.json();console.log("API request failed")})).then((function(e){return e.tracks?e.tracks.items.map((function(e){return{id:e.id,name:e.name,artist:e.artists[0].name,album:e.album.name,uri:e.uri,cover:e.album.images[2].url,preview:e.preview_url}})):[]}))},savePlaylist:function(e,t){if(e&&t.length){var a,s=k.getAccessToken(),n={Authorization:"Bearer ".concat(s)};return fetch("https://api.spotify.com/v1/me",{headers:n}).then((function(e){if(e.ok)return e.json()})).then((function(s){return a=s.id,fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists"),{headers:n,method:"POST",body:JSON.stringify({name:e})}).then((function(e){if(e.ok)return e.json();console.log("API request failed")})).then((function(e){var s=e.id;return fetch("https://api.spotify.com/v1/users/".concat(a,"/playlists/").concat(s,"/tracks"),{headers:n,method:"POST",body:JSON.stringify({uris:t})})}))}))}}},y=k,O=(a(20),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={searchResults:[],playlistName:"baobao-playlist",playlistTracks:[]},s.addTrack=s.addTrack.bind(Object(h.a)(s)),s.removeTrack=s.removeTrack.bind(Object(h.a)(s)),s.updatePlaylistName=s.updatePlaylistName.bind(Object(h.a)(s)),s.savePlaylist=s.savePlaylist.bind(Object(h.a)(s)),s.search=s.search.bind(Object(h.a)(s)),s}return Object(l.a)(a,[{key:"updatePlaylistName",value:function(e){this.setState({playlistName:e})}},{key:"addTrack",value:function(e){var t=this.state.playlistTracks;t.push(e),this.setState({playlistTracks:t})}},{key:"removeTrack",value:function(e){var t=this.state.playlistTracks;t=t.filter((function(t){return t.id!==e.id})),this.setState({playlistTracks:t})}},{key:"search",value:function(e){var t=this;y.search(e).then((function(e){t.setState({searchResults:e})}))}},{key:"savePlaylist",value:function(){var e=this,t=this.state.playlistTracks.map((function(e){return e.uri}));y.savePlaylist(this.state.playlistName,t).then((function(){e.setState({playlistName:"New PlayList",playlistTracks:[]})}))}},{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{children:["Ja",Object(d.jsx)("span",{className:"highlight",children:"mmm"}),"ing"]}),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(m,{onSearch:this.search}),Object(d.jsxs)("div",{className:"App-playlist",children:[Object(d.jsx)(v,{searchResults:this.state.searchResults,onAdd:this.addTrack}),Object(d.jsx)(f,{playlistName:this.state.playlistName,playlistTracks:this.state.playlistTracks,onRemove:this.removeTrack,onNameChange:this.updatePlaylistName,onSave:this.savePlaylist})]})]})]})}}]),a}(r.a.Component)),T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,22)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),r(e),c(e)}))};i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),T()}],[[21,1,2]]]);
//# sourceMappingURL=main.cc5dbc06.chunk.js.map