import React from "react";

const Photos = () => {
  return (
    <div className="container mx-auto mb-2">
      <div className="flex flex-col md:flex-row md:flex-wrap">
        <div className="aspect-square w-full md:w-1/2 p-1">
          <img
            src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t39.30808-6/296172463_582860913304641_5769310248454754325_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=8-E0V7VRNUcAX9cXuxS&_nc_ht=scontent.fsgn3-1.fna&oh=00_AT-Md_W8gNlhd28kC2PRBFGRVnGNA9pHUXtbwj5-_gszXQ&oe=62F8CAE6"
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-wrap">
          <div className="w-1/2 h-1/2 p-1">
            <img
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/295502411_579375713653161_7422093561641524939_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=C0IFjnKGy1wAX_0tnXD&_nc_ht=scontent.fsgn8-4.fna&oh=00_AT_l1Ik2RPZw2Os5ka9mWnZOLQ9YUwFsVzgxF4nyWEvBfg&oe=62F921D5"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-1/2 p-1">
            <img
              src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/294699204_577039477220118_7439002735531980375_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=7zoZ3jNgJlEAX-9t9F6&_nc_oc=AQk1tI3SfSKzJbji2vsdeIISoJjsld--oxVZSMZgrIefZGtwE5I-zReYo6By9E3plZs&_nc_ht=scontent.fsgn8-3.fna&oh=00_AT_wpUkZiJrd82JVP4Ywi2FfGUXPIRGuP-rdSbNqHs2Czw&oe=62F8685B"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-1/2 p-1">
            <img
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/294334761_575108467413219_5277083892190120313_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=4EFOzJmLSQMAX-2wt1v&_nc_ht=scontent.fsgn8-4.fna&oh=00_AT_EsdSHeRFrJz_SStgyim4JFBtaZlIYfWPocPztJCkKVg&oe=62F9B578"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-1/2 p-1">
            <img
              src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/293221661_574374704153262_1752814225654072420_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=fzkjDRo_9gEAX8bvM_b&tn=ybrhR-8-aW06gLvY&_nc_ht=scontent.fsgn8-4.fna&oh=00_AT8wHdPpTQEMFd8GNxJoB6t5uVGaVwg1HOkLvcku8qHSCQ&oe=62F8C38F"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photos;
