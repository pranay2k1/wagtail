import React from 'react';

interface WagtailLogoProps {
  className?: string;
}

const WagtailLogo = ({ className }: WagtailLogoProps) => {
  const feathersClasses = 'group-hover:w-text-black';

  return (
    <svg
      className={`
        ${className || ''}
         sidebar-wagtail-branding__icon !w-overflow-visible w-group w-text-primary w-transition w-delay-150 w-duration-150 hover:w-scale-75 hover:w-rotate-6 hover:w-translate-y-[-20px] hover:w-translate-x-[10px] w-z-10 w-absolute w-w-[100px] w-h-[125px] w-top-[25px] w-left-[-20px]
      `}
      width="430"
      height="537"
      viewBox="0 0 430 537"
      enableBackground="new 0 0 430 537"
      xmlSpace="preserve"
      aria-hidden="true"
    >
      <g>
        <path
          className="wagtail-logo-face"
          fill="#FFF"
          d="M352.963,12.781l0.045,23.909c0,0-42.592-15.901-70.037,13.096
		c-19.961,21.089-21.598,44.264-12.447,75.489c90.422,0,104.358,50.584,104.358,50.584l-9.314-58.195l28.391-34.591
		C393.958,42.106,360.062,15.018,352.963,12.781"
        />
        <path
          className={`w-hidden ${feathersClasses}`}
          data-part="eye--closed"
          d="M343 77.2c14-16 33.8-7 33.8-7"
          fill="#261A4E"
          stroke="#231f20"
          strokeWidth="12"
        />
        <path
          className={feathersClasses}
          data-part="eye--open"
          fill="currentColor"
          d="M371.838,71.336c0,6.016-4.877,10.893-10.893,10.893
		s-10.893-4.877-10.893-10.893c0-6.016,4.877-10.893,10.893-10.893S371.838,65.321,371.838,71.336"
        />
        <path
          className={feathersClasses}
          data-part="body"
          fill="currentColor"
          d="M374 176s-14-69.4-104.4-50.7C260.6 94 262 71 282 49.8c27.5-29 70-13 70-13v-24C337 6.2 322.8 5 307 5c-58 0-90.3 43.3-104 72.8L39.4 378l46.2-8.6 19.3 24.2c127.6 0 291.7-46 269-217.7"
        />

        <polygon
          className={feathersClasses}
          data-part="beak"
          fill="currentColor"
          points="429.948,117.665 393.96,83.063 365.567,117.665"
        />
        <path
          data-part="feather-accent"
          fill="#FFFFFF"
          d="M127.182,356.69c0,0,4.245-0.923,11.672-2.539
		c7.417-1.656,18.014-4.045,30.575-7.466c6.275-1.726,13.045-3.697,20.108-6.065c7.085-2.303,14.437-5.076,21.921-8.202
		c7.501-3.092,15.019-6.812,22.457-10.906c7.456-4.074,14.657-8.853,21.501-14.049c1.68-1.342,3.444-2.577,5.051-3.999l4.864-4.199
		c3.08-2.959,6.243-5.817,9.02-8.994c2.938-3.031,5.493-6.344,8.101-9.54c1.246-1.642,2.395-3.343,3.585-4.992l1.757-2.479
		l1.582-2.568c1.044-1.707,2.08-3.399,3.106-5.076c0.919-1.737,1.827-3.459,2.728-5.162c0.449-0.851,0.895-1.697,1.338-2.539
		c0.388-0.87,0.774-1.735,1.157-2.594c0.767-1.717,1.524-3.414,2.271-5.087c1.34-3.412,2.562-6.766,3.71-10.015
		c0.963-3.316,1.979-6.491,2.8-9.583c0.716-3.12,1.401-6.11,2.054-8.954c0.482-2.881,0.938-5.613,1.368-8.18
		c0.491-2.556,0.66-4.996,0.915-7.235c0.236-2.241,0.455-4.299,0.65-6.159c0.372-7.477,0.585-11.75,0.585-11.75l6.669,0.229
		c0,0-0.324,4.398-0.894,12.094c-0.248,1.915-0.523,4.036-0.823,6.345c-0.317,2.305-0.556,4.811-1.124,7.447
		c-0.508,2.643-1.049,5.455-1.619,8.419c-0.745,2.928-1.529,6.006-2.348,9.217c-0.927,3.182-2.057,6.452-3.137,9.856
		c-1.271,3.341-2.62,6.786-4.095,10.284c-0.815,1.716-1.643,3.456-2.479,5.217c-0.418,0.879-0.84,1.764-1.263,2.654
		c-0.48,0.862-0.963,1.729-1.449,2.601c-0.974,1.739-1.958,3.498-2.953,5.273c-1.103,1.71-2.216,3.436-3.339,5.176
		c-0.564,0.867-1.131,1.738-1.7,2.613l-1.875,2.521c-1.27,1.675-2.499,3.398-3.826,5.062c-2.766,3.236-5.482,6.58-8.576,9.627
		c-2.936,3.195-6.25,6.054-9.479,9.007l-5.081,4.178c-1.678,1.414-3.509,2.635-5.256,3.961c-7.111,5.136-14.549,9.812-22.201,13.76
		c-7.636,3.969-15.32,7.542-22.954,10.477c-7.619,2.971-15.078,5.579-22.249,7.723c-7.15,2.207-13.986,4.021-20.315,5.599
		c-12.667,3.126-23.322,5.26-30.779,6.738C131.448,355.869,127.182,356.69,127.182,356.69"
        />
      </g>
      <path
        className={feathersClasses}
        data-part="tail"
        fill="currentColor"
        d="M109 369.7l-22.4-4.3L2 528.4 61 518l45-128.4"
      />
    </svg>
  );
};

export default WagtailLogo;
