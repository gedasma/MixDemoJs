const form = ()=>{
    return `
    <p class="message"></p>
    <div class="form-group">
        <input type = "text" class="form-control address city" placeholder="Miestas">
    </div>
    <div class="form-group">
        <input type = "text" class="form-control address term" placeholder="Jusu adresas">
    </div>
    <div class="form-group">
        <input type = "text" class="form-control result" readonly>
    </div>
    <div class="form-group">
        <button type="submit" class = "btn btn-primary">Ieskoti</button>
    </div>
    `
}

export default form