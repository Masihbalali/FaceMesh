function preview_image(event) {
    var reader = new FileReader();
    reader.onload = function(){
      var output = document.getElementById('output_image');
      output.src = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
	
  }


document.addEventListener("DOMContentLoaded",function(){
	let btn = this.getElementById("upload");

	if (btn) {
		btn.addEventListener("click",function(){
			let cl = this.classList,
				r = "upload-btn--running",
				d = "upload-btn--done",
				dur = 9000;

			if (!cl.contains(r) && !cl.contains(d) && !this.disabled) {
				cl.add(r);
				this.disabled = true;
				this.innerHTML = "Upload";

				setTimeout(() => {
					cl.remove(r);
					cl.add(d);
					this.innerHTML = "Upload";

					setTimeout(() => {
						cl.remove(d);
						this.disabled = false;
						this.innerHTML = "Upload";
					},1500);
				},dur);
			}
		});
	}
});
  
