/* eslint-disable @next/next/no-img-element */
import React from "react";

const MsgContainer: React.FC = () => {
  return (
    <div className="">
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user message" src="/candidate/1.webp" />
          </div>
        </div>
        <div className="chat-bubble bg-slate-200 text-slate-500">
          Hi Tushar, How are you
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user message" src="/candidate/1.webp" />
          </div>
        </div>
        <div className="chat-bubble bg-primary text-white">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          ipsam magnam sapiente itaque voluptas velit impedit. Eveniet autem
          alias nam commodi laboriosam quasi cumque non, incidunt adipisci
          fugiat nemo dolorum.
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user message" src="/candidate/1.webp" />
          </div>
        </div>
        <div className="chat-bubble bg-slate-200 text-slate-500">
          Why you keep sending lorem text!
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user message" src="/candidate/1.webp" />
          </div>
        </div>
        <div className="chat-bubble bg-primary text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nam
          debitis recusandae tempore labore similique autem illo tenetur a
          voluptates!
        </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="user message" src="/candidate/1.webp" />
          </div>
        </div>
        <div className="chat-bubble bg-slate-200 text-slate-500">
          You creazy :-|
        </div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default MsgContainer;
