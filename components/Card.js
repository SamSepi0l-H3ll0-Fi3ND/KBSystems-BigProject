const Card = ({}) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <div class="card-body items-center text-center">
        <div class="avatar online">
          <div class="w-24 rounded-full">
            <img src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <h2 class="card-title">Jakub Figzał</h2>
        <p>
          Alkoholik, degenerat, piłkarz, aktor, wybitna postać, menel, stary
          dziad
        </p>
        <div class="flex justify-center  mt-6">
          <div class="btn btn-outline ml-1 btn-xs">Piłka nożna</div>
          <div class="btn btn-outline  ml-1 btn-xs">Alkohol</div>
          <div class="btn btn-outline ml-1 btn-xs">Web Design</div>
          <div class="btn btn-outline  ml-1 btn-xs">Kolana gryca</div>
        </div>
        <div class="btn-group mt-6">
          <button class="btn btn-accent btn-outline">Follow</button>
          <button class="btn btn-accent btn-outline">...</button>
        </div>
      </div>
    </div>
  );
};
export default Card;
