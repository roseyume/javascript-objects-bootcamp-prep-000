var playlist  = new Object({Haha: "SSOA"})
function updatePlaylist(playlist, artist, song)
{
  playlist.assign(playlist, {[artist]: song})
  return playlist
}
function removeFromPlaylist(playlist,artist)
{
  playlist.delete
}