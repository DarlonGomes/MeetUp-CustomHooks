/* eslint-disable consistent-return */
import { useCallback, useEffect, useRef, useState } from "react";

export function useTimeout(callback, delay) {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clear = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  return { reset, clear };
}

export function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, []);
}

export function useInterval(callback, delay) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let id = null;
    if (delay) {
      id = setInterval(() => callbackRef.current(), delay);
    } else {
      clearInterval(id);
    }

    return () => clearInterval(id);
  }, [delay]);
}

export function useWatchInterval(callback, trigger) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    let interval = null;
    if (trigger) {
      interval = setInterval(() => {
        callbackRef.current((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [trigger]);
}

function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") {
      return defaultValue();
    }
    return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) return storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  });

  return [value, setValue, remove];
}

export function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useOnScreen(ref, setPage) {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setTimeout(() => {
          setPage((prev) => prev + 1);
        }, 1000);
      }
    });
    if (ref.current) {
      intersectionObserver.observe(ref.current);
    }
    return () => intersectionObserver.disconnect();
  }, []);
}

/// BONUS
export function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    }
    return callback();
  }, dependencies);
}

export function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(element) {
    setArray((a) => [...a, element]);
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function incremment(newElement) {
    setArray((a) => [...a, ...newElement]);
  }

  function remove(index) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function clear() {
    setArray([]);
  }

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    incremment,
    remove,
    clear,
  };
}
