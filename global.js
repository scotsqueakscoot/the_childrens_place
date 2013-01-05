$(function() {
	$(".branchBubble").click(function(e) {
		var id = "#" + $(this).attr("id") + "Text";
		if($(".informationBoxWrapper").hasClass("viewing")) {
			showText(id);
		} else {
			$(".formingCloud").addClass("inPosition");
			setTimeout(function() {
				$(".formingCloud").hide();
				$(".formingCloud").removeClass("inPosition")
				showText(id);
			}, 1000);
		}
		e.preventDefault();
	});
	
	$("#logo").click(function(e) {
		$(".informationBoxWrapper").removeClass("viewing");
		$(".formingCloud").show();
		e.preventDefault();
	});
});

function showText(id) {
	$(".informationBoxWrapper").removeClass("viewing");
	$(id).addClass("viewing");
}