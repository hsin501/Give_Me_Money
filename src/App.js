import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [friends, setFriends] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false); //提交後關閉
  }

  function handleSelcted(friend) {
    // setSelectedFriend(friend);
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    // console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          onSelection={handleSelcted}
          selectedFriend={selectedFriend}
        />

        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}

        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? '關閉' : '新增好友'}
        </Button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

function FriendsList({ friends, onSelection, selectedFriend }) {
  // const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className='red'>
          你欠{friend.name} {Math.abs(friend.balance)}元
        </p>
      )}
      {friend.balance > 0 && (
        <p className='green'>
          {friend.name} 欠你 {Math.abs(friend.balance)}元
        </p>
      )}
      {friend.balance === 0 && <p>你跟{friend.name} 互不相欠</p>}

      <Button onClick={() => onSelection(friend)}>
        {isSelected ? '關閉' : '選擇'}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return; //沒有名稱或圖像 立即返回

    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    // console.log(newFriend);
    onAddFriend(newFriend);

    setName('');
    setImage('https://i.pravatar.cc/48');
  }
  return (
    <form className='form-add-friend' onSubmit={handleSubmit}>
      <label>👫好友名稱</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>🖼️圖片網址</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>添加</Button>
    </form>
  );
}

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const [whoISPaid, setWhoIsPaid] = useState('user');

  function handlePaidcal(bill, paidByUser) {
    return bill ? bill - paidByUser : '';
  }
  // or
  // const paidByFriend = bill ? bill - paidByUser : '';

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return; //防止沒有輸入數字就提交表單
    onSplitBill(
      whoISPaid === 'user' ? handlePaidcal(bill, paidByUser) : -paidByUser
    ); //你付費 餘額中負數是你欠的 正數是你朋友欠你的
  }
  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>與{selectedFriend.name}進行分帳</h2>
      <label>💰帳單金額</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>🧍‍♀️您的費用</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value)
        }
      />

      <label>👫{selectedFriend.name}的費用</label>
      <input type='text' disabled value={handlePaidcal(bill, paidByUser)} />

      <label>🤑由誰買單</label>
      <select value={whoISPaid} onChange={(e) => setWhoIsPaid(e.target.value)}>
        <option value='user'>你</option>
        <option value='friend'>{selectedFriend.name}</option>
      </select>
      <Button>計算分帳</Button>
    </form>
  );
}
