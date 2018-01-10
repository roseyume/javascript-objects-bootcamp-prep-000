var playlist  = new Object({Haha: "SSOA"})
function updatePlaylist(playlist, artistName, songTItle)
{
  playlist.assign(playlist, {[artistName]: songTitle})
  return playlist
}
function removeFromPlaylist(playlist,artistName)
{
  delete playlist.artistName;
}