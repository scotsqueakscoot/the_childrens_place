$(function() {
	$(".branchBubble").click(function(e) {
		$(".informationBoxWrapper").removeClass("viewing");
		$("#" + $(this).attr("id") + "Text").addClass("viewing");
		e.preventDefault();
	});
	
	$("#logo").click(function(e) {
		$(".informationBoxWrapper").removeClass("viewing");
		e.preventDefault();
	});
});