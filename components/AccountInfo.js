const AccountInfo = ({}) => {
  return (
    <div class="flex items-center space-x-3">
      <div class="avatar">
        <div class="mask mask-squircle w-12 h-12">
          <img
            src="https://placeimg.com/300/100/people"
            alt="Avatar Tailwind CSS Component"
          />
        </div>
      </div>
      <div>
        <div class="font-bold">Hart Hagerty</div>
        <div class="text-sm opacity-50">United States</div>
      </div>
    </div>
  );
};

export default AccountInfo;