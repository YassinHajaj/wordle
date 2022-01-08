function Help() {
  return (
    <div onClick={() => window.open('https://www.powerlanguage.co.uk/wordle/', '_blank')}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="30"
        viewBox="0 0 24 24"
        width="30"
      >
        <path
          fill="#565758"
          d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"
        ></path>
      </svg>
    </div>
  );
}

export default Help;