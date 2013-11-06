function SimpleVideoBlock(runtime, element) {
    var iframe = $('.simplevideo iframe'),
        player = $f(iframe[0]),
        watched_status = $('.simplevideo .status .watched');

    function on_finish(id) {
        $.ajax({
            type: "POST",
            url: runtime.handlerUrl(element, 'mark_as_watched'),
            data: JSON.stringify({watched: true}),
            success: function(result) {
                watched_status.text(result.watched);
            }
        });
    }

    player.addEvent('ready', function() {
        player.addEvent('finish', on_finish);
    });
}
